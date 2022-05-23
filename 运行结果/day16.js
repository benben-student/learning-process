//1.更新DOM
//一种是修改innerHTML属性
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC';


//2.插入DOM  前提是被插入的标签内部是空的，否则会替换掉原来内部所有的内容
var a = document.getElementById('p-idd')
a.innerHTML = '<span>child</span>'


//3.使用appendChild办法可以插入新的节点到父节点的最后一个子节点
var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);
//改变后的html结构如下，原结构在demo.html-->1.：     
       {/* <div id="list">
             <p id="java">Java</p>
             <p id="python">Python</p>
             <p id="scheme">Scheme</p>
             <p id="js">JavaScript</p>
         </div> */}


//4.删除节点：
//要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉：
        // 拿到待删除节点:
        var self = document.getElementById('to-be-removed');
        // 拿到父节点:
        var parent = self.parentElement;
        // 删除:
        var removed = parent.removeChild(self);
        removed === self; // true
//示例如下 原结构在demo.html-->4：
        var parent = document.getElementById('parent');
        parent.removeChild(parent.children[0]);
        parent.removeChild(parent.children[1]);//注意在删除第一个节点之后此节点下标已变成[0],其结果是报错
