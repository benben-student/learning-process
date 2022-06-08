import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { createStoreHook, Provider } from 'react-redux';

const stateChanger = (state, action) => {
  if (state === undefined) {
    return {n:0}
  } else {
    if (action.type === 'add') {
      var newState = {n:state.n + action.payload}
      return newState
    } else {
      return state
    }
  }
}

const store = createStore(stateChanger)
// render()
// store.subscribe(() => {
//   render()
// })

// function add3() {
//   if (store.getState() % 2 === 1) {
//     store.dispatch({ type: 'add', payload: 1 })
//   }
// }
// function add4() {
//   setTimeout(()=>{
//     store.dispatch({type:'add',payload:1})
//   },2000)
// }
function render() {
  ReactDOM.render(
    <Provider store={{store}}>
    <App/>
    </Provider>
    , document.getElementById('root'))
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
