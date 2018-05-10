const mongoose=require('mongoose')
//连接mongo使用imooc这个合集
const DB_URL='mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL);

const models={
	user:{
		'user': {type:String,require:true},
		'pwd' : {type:String,require:true},
		'type': {type:String,require:true},
		'avatar':{'type':String},
		'dec':	{'type':String},
		'title':{'type':String},
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{

	}
}
for (let m in models) {
	mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports={
	getModel:(name)=>{
		 return mongoose.model(name)
	}
}
