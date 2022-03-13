import mongoose from 'mongoose';

const User = new mongoose.Schema({
    id : {
        unique : true,
        type : String,
        lowercase : true
    },
    name : String,
    pass : {
        required : true,
        type : String
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

export const UserModel = mongoose.model('UserModel',User)