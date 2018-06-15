import React,{Component} from "react";
import {connect} from 'react-redux'
import {Result,List,WhiteSpace, Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user_redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {logoutSubmit}

)
 export default class User extends Component{
 constructor(props){
   super(props);
   this.layout=this.layout.bind(this);
   }
   //因绑定事件无效
   layout(){
       const alert=Modal.alert;
       alert('注销', '确认退出登录吗???', [
             { text: '取消', onPress: () => console.log('cancel') },
             { text: '确认', onPress: () => {
               browserCookie.erase('userid')
               this.props.logoutSubmit();
             }}
           ])
    //    browserCookie.erase("userid");
    //    window.location.href=window.location.href;
   }
   render(){
       console.log(this.props);
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
              <List>
                  <Item onClick={()=>this.layout}>退出登录</Item>
              </List>
          </div>
     ):<Redirect to={"/login"} />
   }
 }
