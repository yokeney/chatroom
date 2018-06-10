import React,{Component} from "react";
import axios from 'axios'
import {Card,WingBlank,WhiteSpace}  from 'antd-mobile'
import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'
import {getUserList} from '../../redux/chatuser.redux'
@connect(
    state=>state.chatuser,
    {getUserList}

)
 export default class Boss extends Component{
	 constructor(){
  		super();
 		this.state={data:[]}
  		}
	 componentDidMount(){
		this.props.getUserList('boss');
	 }
 	render(){
		console.log(this.state.data);
 		return <UserCard userList={this.props.userList}></UserCard>
 	}
 }
