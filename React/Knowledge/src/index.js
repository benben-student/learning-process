//一：JSX

//1.在JSX语法中你可以在{}中放置任何有效的JavaScript表达式
//如：user.firstName或formatName(user)的表达式等
//例： 下面的示例将调用JavaScript函数formatName(user)的结果嵌入到<h1>标签中
function formatName(user) {
    return user.firstName + '' + user.lastName
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
const element1 = (
    <h1>
        Hello,{formatName(user)}!
    </h1>
)
ReactDOM.render(
    element,
    document.getElementById('root')
)

//假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：
const element2 = <img src={user.avatarUrl} />;

//二：元素渲染
//想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：
const element3 = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));


//计时器例子：
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
//这个例子会在 setInterval() 回调函数，每秒都调用 ReactDOM.render()。


//组件：
//概念上类似于js函数，它可以接受任意的传入如参数(porps)而且返回用于描述页面展示内容的React元素
//1.函数组件：
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
//同时也可以用class来定义组件(属于ES6语法)

//class组件：
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//渲染组件：
//下面这段代码会在页面上渲染‘Hello,Sara’
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
//这个过程都发生了什么：如下
//1.我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
//2.React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
//3.Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
//4.React DOM 将 DOM 高效地更新为 <h1>Hello, Sara</h1>。
//一定要注意：组件名称必须以大写字母开头



//组合组件：
//可以创建一个可以多次渲染Welcome组件的App组件：如下
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//State&生命周期
//时钟的例子,封装真正可复用的 Clock 组件。它将设置自己的计时器并每秒更新一次。 
//1，从外观开始
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);//它忽略了一个关键的技术细节：Clock 组件需要设置一个计时器，并且需要每秒更新 UI。
//我们需要在 Clock 组件中添加 “state” 来实现这个功能。
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  const roots = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock />);


//注意：
//（1.React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
// 2.使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。      ）


//元素变量
//注销和登录按钮
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  //&&运算符
  //通过花括号包裹代码，你可以在 JSX 中嵌入任何表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。
  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );


  //三目运算符：另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 condition ? true : false。
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
  }


  //key ：key 帮助 React 识别哪些元素改变了，比如被添加或删除。
  const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);


//组合 && 继承

//包含关系:组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }


