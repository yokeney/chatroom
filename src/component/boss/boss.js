import React,{Component} from "react";
import axios from 'axios'
import {Card,WingBlank,WhiteSpace}  from 'antd-mobile'
import {connect} from 'react-redux'
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
		this.props.getUserList('genius');
	 }
 	render(){
		console.log(this.state.data);
		const Header=Card.Header;
		const Body=Card.Body;
 		return (
 				<WingBlank>
				<WhiteSpace></WhiteSpace>
					{
						this.props.userList.map(v=>(
							v.avatar?<Card key={v._id}>
								<Header  title={v.user} thumb={require(`../img/${v.avatar}.png`)} extra={v.title}>
								</Header>
								<Body>

								</Body>
							</Card>:null
						))
					}
				</WingBlank>
 		)
 	}
 }
