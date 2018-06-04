import React,{Component} from "react";
import {Grid,List} from 'antd-mobile'
import ProTypes from 'prop-types'
 export default class AvatarSelector extends Component{
     static propTypes={
         selectAvatar:ProTypes.func.isRequired
     }
	 constructor(){
		 super();
		this.state={text:''}
	 }
 	render(){
		const avatar='boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v=>({
			icon:require(`../img/${v}.png`),
			text:v
		}))
		const gridHeader=this.state.text?(<div>
			<span>已选择头像</span>
			<img src={this.state.icon}style={{width:20}} alt=""/>
		</div>):'请选择头像'
 		return (
			<div>
				<List renderHeader={()=>gridHeader}></List>
					<Grid
					data={avatar}
					activeStyle={false}
					columnNum={5}
					onClick={elm=>{
						this.setState(elm)
						this.props.selectAvatar(elm.text)
					}}/>
			</div>
 		)
 	}
 }
