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
import {counter} from './index_redux'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
const store=createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolExtension?window.devToolExtension():f=>f

));
function render(){
	function Lesson(){
		return <h2>Lesson</h2>
	}
	function Profile(){
		return <h2>Profile</h2>
	}
	ReactDom.render(<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li><Link to="/">1</Link></li>
					<li><Link to="/Lesson">2</Link></li>
					<li><Link to="/Profile">3</Link></li>
				</ul>
				<Route path="/" exact component={App}></Route>
				<Route path="/Lesson" component={Lesson}></Route>
				<Route path="/Profile" component={Profile}></Route>
			</div>
		</BrowserRouter>
		</Provider>,document.getElementById('root'))
}
render()
store.subscribe(render)
