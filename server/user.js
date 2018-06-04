const express=require('express');
const Router=express.Router();
const model=require('./model')
const utils=require('utility')
const _filter={'pwd':0,'__v':0}
const User=model.getModel('user')
Router.get('/list',(req,res)=>{
	// User.remove({},(e,d)=>{
	// 	console.log(e);
	// })
	User.find({},(err,doc)=>{
		return res.json(doc)
	})
})
Router.post('/update',(req,res)=>{
	const userid=req.cookies.userid;
	if (!userid) {
		return json.dumps({code:1})
	}
	const body=req.body;
	User.findByIdAndUpdate(userid,body,(err,doc)=>{
		const data=Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})

})
Router.post('/login',function(req,res){
	const {user,pwd}=req.body;
	User.findOne({user,pwd:md5Pwd(pwd)},_filter,(err,doc)=>{
		if (!doc) {
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid',doc._id)
		return res.json({code:0,data:doc})
	})
})
Router.post('/register',(req,res)=>{
	console.log(req.body);
	const {user,pwd,type}=req.body;
	User.findOne({user:user},(err,doc)=>{
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
	const userModel=new User({user,type,pwd:md5Pwd(pwd)});
	userModel.save((e,d)=>{
		if (e) {
			return res.json({code:1,msg:'后端出错'})
		}
		const {user,type,_id}=d;
		res.cookie('userid',_id)
		return  res.json({code:0,data:{user,type,_id}})
	})

	})
})
Router.get('/info',(req,res)=>{
	const {userid}=req.cookies;
	if (!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid},_filter,(err,doc)=>{
		if (err) {
			return res.json({code:1,msg:'后端出错了'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})
})
function md5Pwd(pwd){
	const salt='hx@!';
	return utils.md5(utils.md5(pwd+salt))
}
module.exports=Router;
