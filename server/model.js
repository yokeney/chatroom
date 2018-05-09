const mongoose=require('mongoose')
//连接mongo使用imooc这个合集
const DB_URL='mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL);
