import React,{Component} from "react";
import logoImg from './job.png'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import "./logo.css"
 export default class Logo extends Component{
 	render(){
 		return (
			<div className="logo-container">
				<img src={logoImg} alt=""/>
			</div>
 		)
 	}
 }
