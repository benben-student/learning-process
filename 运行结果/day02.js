//对象是一种无序的集合数据类型，它由若干键值对组成。
var benben = {
    name: '笨笨',     //键：值
    birth: '2002',
    school: 'NO.1 biyangxian Middle school',
    height: 180,
    weigth: 75,

}

//如果访问一个不存在的属性会返回什么呢？
//解:
var ben = {
    name: 'benben'
};
console.log(ben.name);
console.log(ben.age); // undefined

//JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：
//引上
ben.age = 20  //新增一个age属性为 20
//delete ben.age         //删除age属性 undefined
//delete ben['name'];      // 删除name属性  undefined

//如果要检测ben是否拥有某一属性，可以用in操作符：
//引上
console.log('name' in ben); // true
console.log('grade' in ben); // false

//判断一个属性是否是ben自身拥有的,可以用hasOwnProperty()方法：
//引上 //hasOwnProperty hasOwnProperty hasOwnProperty hasOwnProperty
console.log(ben.hasOwnProperty('name')); // true
console.log(ben.hasOwnProperty('toString')); // false



//试解释为什么下面的代码显示的是teenager
var age = 20;
if (age >= 6) {
    console.log('teenager');
} else if (age >= 18) {
    console.log('adult');
} else {
    console.log('kid');
}    //解：因为在多个if...else...语句中，如果前面某个条件成立，则后续就不再继续判断了，
//所以在age满足第一个条件后就不再往下执行



//  小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数
//  低于18.5：过轻
//  18.5-25：正常
//  25-28：过重
//  28-32：肥胖
//  高于32：严重肥胖    
//解：
var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var BMI = weight / (height ** 2);
if (BMI < 18.5) {
    alert('过轻')
} else if (BMI < 25&& BMI > 18.5) {
    alert('正常')
} else if (BMI < 28 && BMI > 25) {
    alert('过重')
} else if (BMI < 32 && BMI > 28) {
    alert('肥胖')
} else{
    alert('严重肥胖')
}


