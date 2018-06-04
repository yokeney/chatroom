import React,{Component} from "react";
import{NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import{update} from '../../redux/user_redux'
import {Redirect} from 'react-router-dom'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
@connect(
    state=>state.user,
    {update}
)
 export default class Genusinfo extends Component{
     constructor(){
         super();
         this.state={
             title:'',
			 desc:''
         }
     }
     onChange(key,val){
         this.setState({
             [key]:val
         })
     }
 	render(){
        const path=this.props.location.pathname;
        const redirect=this.props.redirectTo;
        console.log(path,redirect);
 		return (
 				<div>
                     {redirect&&redirect!==path?<Redirect to={this.props.redirectTo} />:null}
                    <NavBar mode="dark">牛人完善列表</NavBar>
                    <AvatarSelector selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}></AvatarSelector>
                    <InputItem onChange={v=>this.onChange('title',v)}>
                        求职职位
                    </InputItem>
                    <TextareaItem rows={3} autoHeight title="个人见解" onChange={v=>this.onChange('desc',v)}></TextareaItem>
                    <Button type="primary" onClick={()=>{
                        this.props.update(this.state)
                    }}>保存</Button>
                </div>
 		)
 	}
 }
