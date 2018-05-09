const express=require('express')
const userRouter=require('./user')
//新建app
const app=express();
app.use('/user',userRouter)
app.listen(9093,()=>{
	console.log("node app start is port 9093");
})
