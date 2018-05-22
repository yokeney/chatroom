import{Component} from "react";
import axios from 'axios'
import {loadData} from '../../redux/user_redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
@withRouter
@connect(
    null,
    {loadData}
)
 export default class AuthRoute extends Component{
	 componentDidMount(){
		 const publicList=['/login','/register']
         console.log(this.props);
        const pathname=this.props.location.pathname;
         if (publicList.indexOf(pathname)>-1) {
             return null
         }
		 axios.get('user/info').then(res=>{
             console.log(res);
			 if (res.status===200) {
                 if (res.data.code===0) {
                     //有登录信息的
                     this.props.loadData(res.data.data);
                 }
                 else{
                     this.props.history.push('/login')
                 }
			 }
		 })
	 }
	 render(){
		 return(
			 null
		 )
	 }
 }
