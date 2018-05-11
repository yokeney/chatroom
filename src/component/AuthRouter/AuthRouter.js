import{Component} from "react";
import axios from 'axios'
import {withRouter} from 'react-router-dom'
@withRouter
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
