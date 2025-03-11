const mongoose = require('mongoose')

const donateschema = new mongoose.Schema({
    item : {type:String,required:true},
    email : {type:String,required:true},
    number :{type:String,required:true},
    img : {type:String,required:true},
    loc : {type:String,required:true},
    des : {type:String,required:true}
})

const Donatemodal =  mongoose.model("donates",donateschema)

module.exports = Donatemodal