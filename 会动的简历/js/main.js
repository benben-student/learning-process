function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}
function writeMarkdown(markdown,fn){
      let domPaper=document.querySelector('#paper>.content')
      let n=0
      let id = setInterval(() => {
      n += 1
      domCode.innerHTML = (markdown.substring(0, n))
      domCode.scrollTop = domCode.scrollHeight
      if (n >= code.length) {
          window.clearInterval(id)
          fn.call()
      }
  }, 0)
}
var result = `/*
*面试官你好，我是奔奔
*我将以动画的形式来介绍我自己
*只用文字介绍太单纯了
*我就用代码来介绍吧
*首先准备一些样式
*/
*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222)
    font-size:16px;
}
#code{
   border:1px solid red;
   padding:16px;
}
#code{
    transform: rotate(360deg);
/*我需要一点代码高亮*/
.token.selector {
    color: black;
  }
  .token.property {
    color: black;
  }
  .token.function {
    color: black;
  }
  #code {
    height: 100vh;
    overflow: hidden;
  }
  .token.selector {
    color: black;
  }
  .token.property {
    color: black;
  }
  .token.function {
    color: black;
  }
  #code {
    position:fixed;
    left:0;
    height: 100vh;
    background:#ddd;
    dispaly:flex;
    justify-content:center;
    aligh-items:center;
  }
  #paper > .content{

  }
`


var result2 = `
#paper{
   
}
`
//为什么writeCode是异步任务/函数
//createPaper是异步任务/函数
writeCode('', result, () => {//writeCode call the function
    createPaper(() => {
        writeCode(result, result2,()=>{
          writeMarkdown()
        })
    })
})//定闹钟：50毫秒之后开始写第一行代码啊
//1.定闹钟
//2.writeCode返回
//3.执行fn2()
//4.闹钟时间到
//5.写第一行代码



function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content=document.createElement('div')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
function fn3(preResult) {
    var result = `
    #paper{
        width:100px;
        height:100px;
        background:red;
    }
`
}
var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHTML = preResult + result.substring(0, n)
    code.innerHTML =
        Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
    }
}, 50)


