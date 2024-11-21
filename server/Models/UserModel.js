
const monggose = require('mongoose');

const UserSchema = new monggose.Schema({
    clerkId:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    photo:{
        type:String,
        require:true,
       
        },
    firstName:{
        type:String,
        },
    lastName:{
        type:String,
         },
    creditBalance:{
        type:Number,
        default:5,
    },
    
})
const UserModel = monggose.model('users',UserSchema);
module.exports = UserModel;