const express=require('express')
const mongoose=require('mongoose')
//连接mongo使用imooc这个合集
const DB_URL='mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',()=>{
	console.log('mongo connect success');
})
const User=mongoose.model('use',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
//新建app
const app=express()
app.get('/',(req,res)=>{
	res.send('<h1>hello,world</h1>')
})
app.get('/data',(req,res)=>{
	res.json({name:'yokea',age:"12"})
})
app.listen(9093,()=>{
	console.log("node app start is port 9093");
})
