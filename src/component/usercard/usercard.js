import React,{Component} from "react";
import {Card,WingBlank,WhiteSpace}  from 'antd-mobile'
import ProTypes from 'prop-types'
 export default class UserCard extends Component{
   static propTypes={
       userList:ProTypes.array.isRequired
   }
   render(){
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
               {v.money?v.money:null}
               {v.company?v.company:null}
               </Body>
             </Card>:null
           ))
         }
       </WingBlank>
     )
   }
 }
