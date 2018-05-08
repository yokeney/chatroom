import {addGum,removeGum,addAsync} from './index_redux'
import React from 'react'
import {connect} from 'react-redux'
@connect(state=>({num:state.counter.count}),{addGum,removeGum,addAsync})
 class App extends React.Component{
	render(){
		return (
		<div>
			<h1>现在有{this.props.num}件事</h1>
			<button onClick={this.props.addGum}>+</button>
			<button onClick={this.props.removeGum}>-</button>
			<button onClick={this.props.addAsync}>###</button>
		</div>
		)
	}
}
export default App;
