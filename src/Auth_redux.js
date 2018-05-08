const LOGININ="loginin";
const LOGINOUT="loginout";
export function auth(state={isAuth:false},action){
	switch (action.type) {
		case LOGININ:
			return {...state,isAuth:true};
		case LOGINOUT:
			return {...state,isAuth:false}
		default:
			return state

	}
}
export function login(){
	return {type:LOGININ}
}
export function loginout(){
	return {type:LOGINOUT}
}
