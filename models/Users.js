import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema ({
    email: {type:String, required:true, unique:true},
    name: {type:String},
    avatarUrl: String,
    password: {type:String},
    userstatus: {type:String},
})

userSchema.pre('save', async function() {
    console.log("users password:", this.password)
    this.password = await bcrypt.hash(this.password, 5);
    console.log("hash password", this.password)
})

const Users = mongoose.model('Users',userSchema);

export default Users;