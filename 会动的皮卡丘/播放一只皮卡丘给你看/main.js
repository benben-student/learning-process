!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
           container.scrollTop=container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 0)
    }
    let code = `.preview{
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
 
    .nose{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }
    .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    .eye::before{
        content: '';
        display: block;
        height: 24px;
        width: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        margin-left: 116px;
    }
    .upperLip{
        height: 25px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 50px;
        background: #FDE348;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        overflow: hidden;
        width: 300px;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background-color: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }`
    writeCode('', code)
}.call()