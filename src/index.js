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
import {createStore,applyMiddleware,compose} from 'redux'
import {counter,addGum,removeGum,addAsync} from './index_redux'
import thunk from 'redux-thunk'
const store=createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolExtension?window.devToolExtension():f=>f

));
function render(){
	ReactDom.render(<App store={store} addGum={addGum} removeGum={removeGum} addAsync={addAsync}/>,document.getElementById('root'))
}
render()
store.subscribe(render)
