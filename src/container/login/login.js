import React,{Component} from "react";
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user_redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
//9.6函数式编程
// function hello(){
//     console.log("hrello");
// }
// hello();
// function wrapperHello(fn){
//     return function(){
//         console.log(1);
//         fn();
//         console.log(2);
//     }
// }
// Hello();
    //属性代理
//     class Hello extends React.Component{
//         render(){
//             return (<h2>hellaaaaao</h2>)
//         }
//     }
//     function wrapperHello(Comp){
//         class wrapperComp extends React.Component{
//             render(){
//                 return (
//                     <div>
//                     <p>高阶组件</p>
//                     <Comp {...this.props}></Comp>
//                     </div>
//                 )
//             }
//         }
//         return wrapperComp;
//     }
// Hello=wrapperHello(Hello);
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
