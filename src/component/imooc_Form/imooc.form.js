import React from 'react'
export default function imoocForm(Comp){
	return class WrapperComp extends React.Component{
		constructor(){
			super();
			this.state={};
			this.handChange=this.handChange.bind(this);
		}
		handChange(key,val){
            this.setState({
                [key]:val
            })
        }
		render(){
			return <Comp handChange={this.handChange} state={this.state} {...this.props}></Comp>
		}
	}
}
