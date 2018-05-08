import React,{Component} from "react";
import {connect} from 'react-redux'
import {login,getUserData} from './Auth_redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.auth,
	{login,getUserData}
)
 export default class Auth extends Component{
	//  constructor(){
	// 	 super();
	// 	 this.state={data:{}}
	//  }
	 componentDidMount(){
		 this.props.getUserData();
	 }
 	render(){
 		return (
			<div>
			<h2>我的名字{this.props.user},年龄{this.props.age}</h2>
				{this.props.isAuth?<Redirect to="Dashboard"/>:null}
				<h1>你没有权限，需要登录</h1>
				<button onClick={this.props.login}>登录</button>
			</div>
 		)
 	}
 }
