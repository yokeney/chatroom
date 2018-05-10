import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {List,Radio,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user_redux'
import '../../index.css'
@connect(
    state=>state.user,
    {register}
)
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
         this.props.register(this.state)
     }
 	render(){
		const RadioItem=Radio.RadioItem;
 		return (
			<div>
				<Logo></Logo>
				<h1>注册</h1>
				<List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
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
