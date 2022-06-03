//Redux
//Redux函数
const reducer=(state,action)=>{
    if(state===undefined){
        return {0:0}
    }else{
        if(action.type==='add'){
            var newState={n:state.n+action.payload}
            return newState
        }else{
            return state
        }
    }
}

//store
const store=createStore(reducer)

//store.subscribe
store.subscribe(()=>{
    render()
})

//store.dispatch
store.dispatch({type:'add',payload:1})

//React-Redux
//Provider标签
    //   <Provider store={store}>
    //       <App/>
    //   </Provider>,

//connect函数
function mapStateTopProps(state){
    return {
        n:state.n
    }
}
function mapDispatchToProps(dispatch){
    return{
        add1:({type:'add',payload:1})
    }
}
export default ConnectionType(mapStateTopProps,mapDispatchToProps)(App);