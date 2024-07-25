const mongoose  = require('mongoose')
const schema = mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    author:{type:String,required:true},
    publicationyear:{type:Number,required:true},
    genre:{type:String,required:true},
    isbnnumber:{type:Number,required:true},
    availability:{type:String,required:true}
})
const bookModel = mongoose.model("books",schema);
module.exports = bookModel;