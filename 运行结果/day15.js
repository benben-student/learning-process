//操作DOM
//操作DOM有如下几个操作:
    //1.更新
    //2.遍历
    //3.添加
    //4.删除
//在操作一个DOM时我们要先拿到这个DOM节点可以用：
document.getElementById()
document.getElementsByTagName()
//以及CSS选择器
document.getElementsByClassName()




//例：
// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;






//第二种方法是使用querySelector()和querySelectorAll()
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');




