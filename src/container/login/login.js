import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user_redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
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
		 this.handelLogin=this.handelLogin.bind(this)
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
     handelLogin(){
         this.props.login(this.state)
     }
 	render(){
 		return (
			<div>
				<Logo></Logo>
                    {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<WingBlank>
                
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
					<InputItem onChange={v=>this.handChange('user',v)}>用户</InputItem>
					<WhiteSpace/>
					<InputItem onChange={v=>this.handChange('pwd',v)}>密码</InputItem>
					<WhiteSpace/>
					<Button type="primary" onClick={this.handelLogin}>登录</Button>
					<WhiteSpace/>
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
 		)
 	}
 }
