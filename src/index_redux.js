
import {ADD,DEL} from './Typeaction'
export function counter(state={count:0},action){
	const count = state.count;
	switch (action.type) {
		case ADD:
			return {count:count+1}
		case DEL:
			return {count:count-1}
		default:
		return state
	}
}
export function addGum(){
	return {type:ADD}
}
export function removeGum(){
	return {type:DEL}
}
export function addAsync(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addGum())
		},2000)
	}
}
