//calss继承
//让我们再回顾一下函数实现Student的方法
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

//如果用class的话可以这样来写
class SStudent{
    constructor(name){
        this.name=name;
    }
    hello(){
        alert('Hello,'+this.name+'!')
    }
}

//之前从Student弄一个PrimaryStudent需要写很多的代码
//现在class则让原型继承的中间对象，原型对象的构造函数等都不需要考虑了
//现在可以直接通过extends来实现
class primaryStudent extends Student{
    constructor(name,grade){
        super(name);//要用super调用父类的构造方法
        this.grade=grade
    }
    myGrade(){
        alert('I am grade'+this,grade)
    }
}

//练习:

//请利用class重新定义Cat，并让它从已有的Animal继承，
//然后新增一个方法say()，返回字符串'Hello, xxx!'：
class Animal {
    constructor(name) {
        this.name = name;
    }
}

//解：
class Cat extends Animal {

    constructor(name){
  
      super(name);
  
    }
  
    say() {
  
      return 'Hello, '+this.name+'!';
  
    }
  
  }
  //测试：
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