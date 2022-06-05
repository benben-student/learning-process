let n=100
function f1(){
   console.log(1)
   f2()
}
function f2(){
    console.log(2)
    f3()
}
function f3(){
    console.log(3)
    f4()
}
function f4(){
    console.log(4,n)
}
{
    f1(n)
    console.log('done')
}