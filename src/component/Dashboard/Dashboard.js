import React,{Component} from "react";
import {connect} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import Boss from '../boss/boss'
import NavLinkBar from '../navlink/navlink'
import Genius from '../Genius/Genius'
import User from '../user/user'
function Msg(){
    return <h1>Msg</h1>
}
@connect(
    state=>state
)
 export default class  extends Component{
   render(){

       const user=this.props.user;
       const {pathname}=this.props.location;
       const navList=[
           {
               path:'/boss',
               text:'牛人',
               icon:'boss',
               title:'牛人列表',
               component:Boss,
               hide:user.type==='genius'
           },
           {
               path:'/genius',
               text:'boss',
               icon:'job',
               title:'BOSS列表',
               component:Genius,
               hide:user.type==='boss'
           },
           {
               path:'/msg',
               text:'消息',
               icon:'msg',
               title:'消息列表',
               component:Msg
           },
           {
               path:'/user',
               text:'我',
               icon:'user',
               title:'个人中心',
               component:User
           }
       ]
     return (
       <div>
           <NavBar mode="dard" className="fixd-header">{navList.find(v=>v.path===pathname).title}</NavBar>
           <div >
                <Switch>
                    {
                        navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))
                    }
                </Switch>
           </div>
           <NavLinkBar data={navList}></NavLinkBar>
       </div>
     )
   }
 }
