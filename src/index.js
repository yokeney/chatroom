import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {counter} from './index_redux'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Auth from './Auth'
import Dashboard from './Dashboard'
const store=createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolExtension?window.devToolExtension():f=>f

));
 function render(){
	ReactDom.render(<Provider store={store}>
		<BrowserRouter>
		<Switch>
			<Route path="/login" exact component={Auth}></Route>
			<Route path="/Dashboard" component={Dashboard}></Route>
			<Redirect to="/Dashboard"></Redirect>
			{/*<Route path="/Profile" component={Profile}></Route>*/}
		</Switch>
		</BrowserRouter>
		</Provider>,document.getElementById('root'))
}
render()
store.subscribe(render)
