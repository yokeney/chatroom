import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {List,Radio,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
 export default class Register extends Component{
	 constructor(){
		 super();
		 this.state={
			 type:'genius'//或者boss
		 }
	 }
 	render(){
		const RadioItem=Radio.RadioItem;
 		return (
			<div>
				<Logo></Logo>
				<h1>注册</h1>
				<List>
					<InputItem>用户名</InputItem>
					<InputItem>密码</InputItem>
					<InputItem>确认密码</InputItem>
					<RadioItem checked={this.state.type="genius"}>牛人</RadioItem>
					<WhiteSpace/>
					<Button type="primary">注册</Button>
				</List>
			</div>
 		)
 	}
 }
