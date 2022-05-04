//class继承

//我们先回顾Student构造函数
function Student(name){
    this.name=name
}
Student.prototype.hello=function(){
     alert('Hello, ' + this.name + '!');
}

 如果用新的`class`关键字来编写`Student`，可以这样写： 

```
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
```

与Student不同的是class继承 可以直接通过`extends`来实现： 

```
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

 //不是所有的主流浏览器都支持ES6的class，需要一个工具把`class`代码

//转换为传统的`prototype`代码，就需要[Babel](https://babeljs.io/)这个工具。 



//练习：

// 请利用`class`重新定义`Cat`，并让它从已有的`Animal`继承，然后新增

//一个方法`say()`，返回字符串`'Hello, xxx!'`： 

//解：

```
class Animal {
    constructor(name) {
        this.name = name;
    }
}
```

class Cat extends Animal{

  constructor(name){

​    super(name);

  }

  say(){

​    return('Hello, ' + this.name + '!');

  }

}

```
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal)
    && kitty 
    && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say)
{
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
```

