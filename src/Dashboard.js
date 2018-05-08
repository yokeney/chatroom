import React,{Component} from "react";
import {Link,Route} from 'react-router-dom'
import App from './App'

 export default class Dashboard extends Component{
 	render(){
 		return (
			<div>
				<ul>
					<li><Link to="/Dashboard">1</Link></li>
					<li><Link to="/Dashboard/Lesson">2</Link></li>
					<li><Link to="/Dashboard/Profile">3</Link></li>
				</ul>
				<Route path="/Dashboard" exact component={App}></Route>
				<Route path="/Dashboard/Lesson" component={Lesson}></Route>
				<Route path="/Dashboard/Profile" component={Profile}></Route>
			</div>
 		)
 	}
 }

 	function Lesson(){
 		return <h2>Lesson</h2>
 	}
 	function Profile(){
 		return <h2>Profile</h2>
 	}
