import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import combineReducers from './reducers'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './config'
import AuthRoute from './component/AuthRouter/AuthRouter'
import Dashboard from './component/Dashboard/Dashboard'
import Login from './container/login/login'
import 	Bossinfo from './container/bossinfo/bossinfo'
import 	Geniusinfo from './container/Geniusinfo/geniusinfo'
import Register from './container/register/register'
import './index.css'
const store=createStore(combineReducers,compose(
	applyMiddleware(thunk),
	window.devToolExtension?window.devToolExtension():f=>f
));
//boss genius me msg
	ReactDom.render(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<AuthRoute></AuthRoute>
					<Switch>
						<Route path='/bossinfo' component={Bossinfo}></Route>
						<Route path='/geniusinfo' component={Geniusinfo}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
						<Route  component={Dashboard}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>,document.getElementById('root'))
