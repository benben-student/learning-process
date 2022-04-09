//利用for循环计算1 * 2 * 3 * ... * 10的结果：
var x = 1;
var i;
for (i = 1; i < 11; i++) {
    x = x * i;
}
console.log(x)


//Map是一组键值对的结构，具有极快的查找速度
     //Map具有以下方法:
     var m=new Map()
     console.log(m.set('xiaoming',13))
     console.log(m.set('xiaomei',16))
     console.log(m.has('xiaoming')) //true
     console.log(m.get('xioaming')) //13
     console.log(m.delete('xiaoming')) 
     console.log(m.get('xiaoming')) //undefined


     // Set  Set和Map类似，不存储value. key不能重复，在Set中，没有重复的key。
     var s1 = new Set(); // 空Set
     var s2 = new Set([1, 2, 3]);

     //通过add(key)方法可以添加元素到Set中
     var s = new Set([1, 2, 3, 3, '3']);
     s.add(4);
     console.log(s);
     s.add(4);
     console.log(s); 
     
     //通过delete(key)方法可以删除元素：
     var bbc = new Set([1, 2, 3]);
     bbc; 
     bbc.delete(3);
     console.log(bbc); 