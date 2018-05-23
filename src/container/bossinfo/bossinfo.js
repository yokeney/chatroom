import React,{Component} from "react";
import{NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
 export default class Bossinfo extends Component{
     constructor(){
         super();
         this.state={
             title:''
         }
     }
     onChange(key,val){
         this.setState({
             [key]:val
         })
     }
 	render(){
 		return (
 				<div>
                    <NavBar mode="dark">Boss页面</NavBar>
                    <AvatarSelector selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}></AvatarSelector>
                    <InputItem onChange={v=>this.onChange('title',v)}>
                        招聘职位
                    </InputItem>
                    <InputItem onChange={v=>this.onChange('company',v)}>
                        公司名称
                    </InputItem>
                    <InputItem onChange={v=>this.onChange('money',v)}>
                        职位薪资
                    </InputItem>
                    <TextareaItem rows={3} autoHeight title="职位要求" onChange={v=>this.onChange('title',v)}></TextareaItem>
                    <Button type="primary">保存</Button>
                </div>
 		)
 	}
 }
