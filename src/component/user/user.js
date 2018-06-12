import React,{Component} from "react";
import {connect} from 'react-redux'
import {Result,List,WhiteSpace} from 'antd-mobile'
@connect(
  state=>state.user,

)
 export default class User extends Component{
 constructor(props){
   super(props);
   this.layout=this.layout.bind(this);

   }
   layout(){
    console.log(111)
   }
   render(){
     const Item=List.Item;
     const Brief=Item.Brief;
     return this.props.user?(
          <div>
              <Result title={this.props.user}
              img={<img src={require(`../img/${this.props.avatar}.png`)}/>}
              message={this.props.type==="boss"?this.props.company:null}
               alt=""/>
              <List renderHeader={()=>'简介'}>
              <Item multipleLine>
              {this.props.title}
              {this.props.staticContext}
              <WhiteSpace></WhiteSpace>
              {this.props.money}
              </Item>
              </List>
              <WhiteSpace></WhiteSpace>
              <List >
                  <Item onClick={this.layout}>退出登录</Item>
              </List>
          </div>
     ):null
   }
 }
