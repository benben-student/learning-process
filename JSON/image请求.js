var image=document.createElement('img')
image.src='/xxx'
document.body.appendChild(image)
image.onload=function(){
    console.log('s')
}
image.onerror=function(){
    console.log('f')
}