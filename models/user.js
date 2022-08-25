import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: false
    },
    googleId : {
        type: String,
        required: false
    },
    id:{
        type:String,
        required : false
    },
    address : {
        type: String,
        required: false
    },
    state : {
        type: String,
        required: false
    },
    country : {
        type: String,
        required: false
    },
    aadhaar : {
        type: String,
        required: false
    },
    mob : {
        type: Number,
        required: false
    },
    alt_mob : {
        type: Number,
        required: false
    },
    cartItems: []

})

export default mongoose.model("User", userSchema);