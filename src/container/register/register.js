import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {List,Radio,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
 export default class Register extends Component{
	 constructor(){
		 super();
		 this.state={
             user:'',
             pwd:'',
             repeatpwd:'',
			 type:'genius',//或者boss,
		 }
         this.handleRegister=this.handleRegister.bind(this);
	 }
     handChange(key,val){
         this.setState({
             [key]:val
         })
     }
     handleRegister(){
         console.log(this.state);
     }
 	render(){
		const RadioItem=Radio.RadioItem;
 		return (
			<div>
				<Logo></Logo>
				<h1>注册</h1>
				<List>
					<InputItem onChange={v=>this.handChange('user',v)}>用户名</InputItem>
					<InputItem onChange={v=>this.handChange('pwd',v)} type="password">密码</InputItem>
					<InputItem onChange={v=>this.handChange('repeatpwd',v)} type="password">确认密码</InputItem>
					<RadioItem checked={this.state.type=="genius"} onChange={()=>this.handChange('type','genius')}>牛人</RadioItem>
					<RadioItem checked={this.state.type=="boss"}   onChange={()=>this.handChange('type','boss')}>Boss</RadioItem>
					<WhiteSpace/>
					<Button type="primary" onClick={()=>this.handleRegister()}>注册</Button>
				</List>
			</div>
 		)
 	}
 }
