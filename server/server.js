const express=require('express')
const mongoose=require('mongoose')
//连接mongo使用imooc这个合集
const DB_URL='mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',()=>{
	console.log('mongo connect success');
})
//创建user表
const User=mongoose.model('user',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
//新增数据
User.create({
	user:'名',
	age:"12"
},(err,doc)=>{
	if (!err) {
		console.log(doc);
	}
	else{
		console.log(err);
	}
})
//删除
// User.remove({age:10},(err,doc)=>{
// 	console.log(doc);
// })
//更新
User.update({'user':'名'},{'$set':{age:26}},(err,doc)=>{
	console.log(doc);
})
//新建app
const app=express()
app.get('/',(req,res)=>{
	res.send('<h1>hello,world</h1>')
})
app.get('/data',(req,res)=>{
	User.find({},(err,doc)=>{
		res.json(doc)
	})
})
app.listen(9093,()=>{
	console.log("node app start is port 9093");
})
