import React from 'react'
import {addGum} from './index_redux'
import {removeGum} from './index_redux'
export default class App extends React.Component{
	render(){
		const store=this.props.store;
		const num=store.getState();
		return (
		<div>
			<h1>现在有{num}件事</h1>
			<button onClick={()=>store.dispatch(addGum())}>+</button>
			<button onClick={()=>store.dispatch(removeGum())}>-</button>
		</div>
		)
	}
}
