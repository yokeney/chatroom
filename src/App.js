import React from 'react'
export default class App extends React.Component{
	render(){
		const store=this.props.store;
		const addGum=this.props.addGum;
		const removeGum=this.props.removeGum;
		const addAsync=this.props.addAsync;
		const num=store.getState();
		return (
		<div>
			<h1>现在有{num}件事</h1>
			<button onClick={()=>store.dispatch(addGum())}>+</button>
			<button onClick={()=>store.dispatch(removeGum())}>-</button>
			<button onClick={()=>store.dispatch(addAsync())}>###</button>
		</div>
		)
	}
}
