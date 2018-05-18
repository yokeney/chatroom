import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user_redux'
import {connect} from 'react-redux'
import {InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
@connect(
    state=>state.user,
    {login}
)
 export default class Login extends Component{
	 constructor(){
		 super();
         this.state={
             user:'',
             pwd:''
         }
		 this.register=this.register.bind(this)
		 this.handChange=this.handChange.bind(this)
	 }
	 register=()=>{
		 console.log(this.props);
		 this.props.history.push('./register')
	 }
     handChange(key,val){
         this.setState({
             [key]:val
         })
     }
     
 	render(){
 		return (
			<div>
				<Logo></Logo>
				<WingBlank>
					<InputItem onChange={v=>this.handChange('user',v)}>用户</InputItem>
					<WhiteSpace/>
					<InputItem onChange={v=>this.handChange('pwd',v)}>密码</InputItem>
					<WhiteSpace/>
					<Button type="primary">登录</Button>
					<WhiteSpace/>
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
 		)
 	}
 }
