const ADD="add"
const DEL="del"
export function counter(state=0,action){
	switch (action.type) {
		case ADD:
			return state+1
		case DEL:
			return state-1
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
