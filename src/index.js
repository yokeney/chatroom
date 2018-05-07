// const store=createStore(counter);
// store.dispatch({type:'add'})
// const init=store.getState();
// console.log(init);
// function listen(){
// 	const cur=store.getState();
// 	console.log(`现在${cur}`);
// }
// store.subscribe(listen)
// store.dispatch({type:"del"})
// store.dispatch({type:"del"})
// store.dispatch({type:"add"})
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {counter} from './index_redux'
const store=createStore(counter);
function render(){
	ReactDom.render(<App store={store}/>,document.getElementById('root'))
}
render()
store.subscribe(render)
