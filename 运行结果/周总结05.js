//1.  用Vue做些小东西
      //html
{/* <body>
    <div id="app"></div>
    <script src="./vue.js"></script>
</body> */}
      //jsw
let vieww = new Vue({
    el: '#app',
    data: {
        selected: 0,
        tabs:[
            {name:'a',content:'aaa'},
            {name:'b',content:'bbb'},
            {name:'c',content:'ccc'},
        ]
    },
    template:`
    <div>
      <ol>
        <li v-for='tab in tabs'
        v-on:click='selected=tab.name'
        v-bind:class='{active:tab.name===selected}'
        >{{tab.name}}</li>
      </ol>
      <ol>
        <li v-for='tab in tabs'
        v-show='selected===tab.name'
        >{{tab.content}}</li>
      </ol>
    </div>
    `,
    methods: {

    }
})



//2.用Vue做的轮播图
        //html
//  <body>
//      <div id="app"></div>
//      <script src="./mainn.js"></script>
//  </body>
//js
let view = new Vue({
    el: '#app',
    data: {
        transformValue:""
    },
    template: `
    <div>
      <div class="window">
         <div class="slides"
         :style="{transform:transformValue}">
         </div>
      </div>
        <button v-on:click="go(0)">1</button>
        <button v-on:click="go(1)">2</button>
        <button v-on:click="go(2)">3</button>
    </div>
    `,
    methods: {
       go(index) {
           this.transformValue=`translateX(${-100*index}px)`
        }
    }
})


//3.
         //html
//x需要引入外部jQuery和vue资源
// <body>
// <div id="app">
//     <div>
//         书名:《JavaScript高级程序设计》
//         数量:<span id="number">2</span>
//     </div>
//     <div>
//         <button id="addOne">加1</button>
//         <button id="minusOne">减1</button>
//         <button id="reset">归零</button>
//     </div>
// </div>
// </body>



//一：
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





