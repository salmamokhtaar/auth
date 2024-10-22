import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role:{
        type: String, 
        enum:['Agency','Agent', 'User'], 
            default: 'User'
        }},
        {timestamps: true},
    )

    const User = mongoose.models.User || mongoose.model('User', UserSchema);

    module.exports = User;