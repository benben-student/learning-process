//<!--原型继承-->

//我们先回忆一下Student构造函数
function Student(props) {
    this.name = props.name || 'Unnamed'
}
Student.prototype.hello = function () {
    alert('hello' + this.name + '!')
}
//他的原型链是：../Image/原型链.png
//我们要根据构造函数Student扩展出PrimaryStudent，可以先定义出来它：

function PrimaryStudent(props) {
    //调用Student构造函数，绑定this变量
    Student.call(this.props)
    this.grade = props.grade || 1
}
//不过需要把PrimaryStudent他的原型链修改为：
//new PrimaryStudent()-->Student.prototype-->Object.prototype-->null
//但是不能直接PrimaryStudent.prototype = Student.prototype这样改 会报错
//我们需要借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向Student.prototype，
//中间对象可以用一个空函数F来实现：
// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
console.log(xiaoming.name); // '小明'
console.log(xiaoming.grade); // 2

// 验证原型:
console.log(xiaoming.__proto__ === PrimaryStudent.prototype); // true
console.log(xiaoming.__proto__.__proto__ === Student.prototype); // true

// 验证继承关系:
console.log(xiaoming instanceof PrimaryStudent); // true
console.log(xiaoming instanceof Student); // true

//新的原型链关系图路径：../Image/new原型链.png


//所以js的原型继承实现方式就是：
     //1.定义新的构造函数并在内部用call()调用希望‘继承’的构造函数，并绑定this
     //2.借助中间函数F实现原型链继承，最好通过封装的inherits(‘继承’)函数完成
     //3.继续在新的构造函数的原型上定义新方法

     //OVER...
