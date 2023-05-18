

let frist_number = ''
let secont_number = ''
let sign = '' // operaci
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','X','/','%','+/-']

// ekran
const out = document.querySelector('.calc-screen p')
const clearac = document.querySelector('.ac')
const buttons = document.querySelector('.buttons')
// event

clearac.addEventListener('click', clearAll)
buttons.addEventListener('click', AllButtons)
// clear

function clearAll (){
 frist_number = '';
 secont_number = '';
 sign = '';
 finish = false;
  out.textContent = 0;
}

// butons

function AllButtons(event){
    //'click no buttons'
    if(!event.target.classList.contains('btn')) return;
    // buttonc clear All ac
  if(event.target.classList.contains('ac')) return;
  out.textContent =''
  // click Value
  const key = event.target.textContent;

  // click  value 0-9 .
  if(digit.includes(key)){

    if(secont_number == '' && sign == '') {
      frist_number += key
      out.textContent = frist_number
    } else if(!frist_number == '' && !secont_number == '' && finish){
      secont_number = key
      finish = false
      out.textContent = frist_number
    }
    else {
      secont_number += key
      out.textContent = secont_number
    }
    console.log(frist_number, sign,secont_number)
  }

  // click actions sign + -
  if(action.includes(key)){
    if(key === '%'){
      out.textContent = 'не работает'
      frist_number = ''
      secont_number = ''
      sign = ''
      return;
    }
    if(key === '+/-'){
      out.textContent = 'не работает'
      frist_number = ''
      secont_number = ''
      sign = ''
      return;
    }
    sign = key
    out.textContent = sign
    return;
  }

  // click =
  if(key === '='){
    if(secont_number === '') secont_number =frist_number
    switch (sign){
      case '+':
        frist_number = (+frist_number) + (+secont_number)
        break;
      case  '-':
        frist_number = frist_number - secont_number
        break;
      case 'X':
        frist_number = frist_number * secont_number
        break;
      case '/':
        if(secont_number === '0'){
          out.textContent = 'Ошибка'
          frist_number = ''
          secont_number = ''
          sign = ''
          return;
        }
        frist_number = frist_number / secont_number
        break;

    }
    finish = true
    out.textContent = frist_number
  }


}
