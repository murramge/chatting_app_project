import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema ({
    email: {type:String, required:true, unique:true},
    name: {type:String},
    avatarUrl: String,
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