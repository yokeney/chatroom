import React,{Component} from "react";
import {connect} from 'react-redux'
import {login} from './Auth_redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.auth,
	{login}
)
 export default class Auth extends Component{
 	render(){
 		return (
			<div>
				{this.props.isAuth?<Redirect to="Dashboard"/>:null}
				<h1>你没有权限，需要登录</h1>
				<button onClick={this.props.login}>登录</button>
			</div>
 		)
 	}
 }
