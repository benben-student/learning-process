let result = document.querySelector('#result')
let add = document.querySelector('#add')
let minus = document.querySelector('#minus')
add.addEventListener('click', function () {
    let number = parseInt(result.innerText, 10)
    number += 1
    result.innerHTML = number
})
minus.addEventListener('click',function(){
    let number=parseInt(result.innerText,10)
    number-=1
    result.innerHTML=number  
})