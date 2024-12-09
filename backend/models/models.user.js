import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:['user','admin'],
        required:true,
    },
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true,       
    },
    password: {
        type: String,
        required: true, 
        minlength: 3    
    },
}, {
    timestamps: true
});

const User = mongoose.model('User ', userSchema);

export default User;