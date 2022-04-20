import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema ({
    email: {type:String, required:true, unique:true},
    name: {type:String},
    avatarUrl: {type:String, default:"https://cosplayfu-website.s3.amazonaws.com/_Photo/character/mini/18163_237115.jpg"},
    password: {type:String},
    userstatus: {type:String},
    friends: [{type:mongoose.Schema.Types.ObjectId, ref:"Users"}],
})

userSchema.pre('save', async function() {
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 5);
        }
})

const Users = mongoose.model('Users',userSchema);

export default Users;