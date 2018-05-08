import React,{Component} from "react";
import {Link,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'
import {loginout} from './Auth_redux'
@connect(
	state=>
	state.auth,
	{loginout}
)
 export default class Dashboard extends Component{
 	render(){
		console.log(this.props);
		const match=this.props.match;
		console.log(match);
		const redirectToLogin=<Redirect to='/login'></Redirect>
 		return this.props.isAuth?
		<div>
		{this.props.isAuth?<button onClick={this.props.loginout}>注销</button>:null}
			<ul>
				<li><Link to={`${match.url}/`}>1</Link></li>
				<li><Link to={`${match.url}/Lesson`}>2</Link></li>
				<li><Link to={`${match.url}/Profile`}>3</Link></li>
			</ul>
			<Route path={`${match.url}/`} exact component={App}></Route>
			<Route path={`${match.url}/Lesson`} component={Lesson}></Route>
			<Route path={`${match.url}/Profile`} component={Profile}></Route>
		</div>:redirectToLogin
 	}
 }

 	function Lesson(){
 		return <h2>Lesson</h2>
 	}
 	function Profile(){
 		return <h2>Profile</h2>
 	}
