let str = ''
let error = false
const screen = document.querySelector('#screen')
const nums = document.querySelectorAll('.btn-num')
nums.forEach((num) => {
    num.addEventListener('click', (e) => {
      if (error === true) clear()
      screen.textContent += num.id
      str += num.id
  });
});

const ops = document.querySelectorAll('.btn-op')
ops.forEach((op) => {
   op.addEventListener('click', (e) => {
       if(op.id === 'c') {
           clear()
       }
       else if(op.id !== '='){
           screen.textContent = ''
           str += op.id
       }
       else {
           calculate(str)
       }
   }) 
});

function calculate(str) {
    try {
        screen.textContent = eval(str.toString())
        update()
    }
    catch(err) {
        screen.textContent = 'Syntax ERROR'
        error = true
    }
}

function update() {
    str = screen.textContent
}

function clear() {
    screen.textContent = ''
    str = ''
    error = false
}