import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import combineReducers from './reducers'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './config'
import AuthRoute from './component/AuthRouter/AuthRouter'
import Login from './container/login/login'
import 	Bossinfo from './container/bossinfo/bossinfo'
import 	Geniusinfo from './container/Geniusinfo/geniusinfo'
import Register from './container/register/register'
const store=createStore(combineReducers,compose(
	applyMiddleware(thunk),
	window.devToolExtension?window.devToolExtension():f=>f
));
console.log(store.getState());
function boss(){
	return <h1>boss</h1>
}
	ReactDom.render(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<AuthRoute></AuthRoute>
					<Switch>
						<Route path='/bossinfo' component={Bossinfo}></Route>
						<Route path='/geniusinfo' component={Geniusinfo}></Route>
						<Route path="/boss" component={boss}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>,document.getElementById('root'))
