import React,{Component} from "react";
import axios from 'axios'
import {Card,WingBlank,WhiteSpace}  from 'antd-mobile'
 export default class Boss extends Component{
	 constructor(){
  		super();
 		this.state={data:[]}
  		}
	 componentDidMount(){
		 axios.get('/user/list?type=genius')
		 .then(res=>{
			 if (res.data.code==0) {
			 	this.setState({data:res.data.data})
			 }
		 })
	 }
 	render(){
		console.log(this.state.data);
		const Header=Card.Header;
		const Body=Card.Body;
 		return (
 				<WingBlank>
				<WhiteSpace></WhiteSpace>
					{
						this.state.data.map(v=>(
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
