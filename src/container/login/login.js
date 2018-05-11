import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
 export default class Login extends Component{
	 constructor(){
		 super();
		 this.register=this.register.bind(this)
	 }
	 register=()=>{
		 console.log(this.props);
		 this.props.history.push('./register')
	 }
 	render(){
 		return (
			<div>
				<Logo></Logo>
				<h4>登录</h4>
				<WingBlank>
					<InputItem>用户</InputItem>
					<WhiteSpace/>
					<InputItem>密码</InputItem>
					<WhiteSpace/>
					<Button type="primary">登录</Button>
					<WhiteSpace/>
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
 		)
 	}
 }
