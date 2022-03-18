var div=document.getElementById('canvas')
//按下去鼠标
div.onmousedown=function(a){
    var x=a.clientX
    var y=a.clientY
    var divA=document.createElement('div')
    divA.style='width: 6px; height:6px;'+
    'background:black;border-radius:3px;'+
    'position:absolute;left:'+(x-3)+'px;'+
    'top:'+(y-3)+'px;'
    div.appendChild(divA)
}
//动鼠标
div.onmousemove=function(y){
    
}
//松开鼠标
div.onmouseup=function(z){
    console.log(1)
}