//一：JSX

//1.在JSX语法中你可以在{}中放置任何有效的JavaScript表达式
//如：user.firstName或formatName(user)的表达式等
//例： 下面的示例将调用JavaScript函数formatName(user)的结果嵌入到<h1>标签中
function formatName(user){
    return user.firstName+''+user.lastName
}
const user={
    firstName:'Harper',
    lastName:'Perez'
}
const element=(
    <h1>
        Hello,{formatName(user)}!
    </h1>
)
ReactDOM.render(
    element,
    document.getElementById('root')
)

//假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：
const element = <img src={user.avatarUrl} />;

//二：元素渲染
//想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));