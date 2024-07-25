const mongoose = require("mongoose");
const user = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true,
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },
        password: {
            type:String,
            required:true,
            unique:true,
        },
        contactnumber: {
            type:Number,
            required:true,
            unique:true,
        },
        avatar: {
            type:String,
            default:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png",
        },
        role: {
            type:String,
            default:"user",
            enum:["user","admin"],
        },
        favourites: [
            {
                type: mongoose.Types.ObjectId,
                ref: "books",
            },
        ],
        cart: [
            {
                type: mongoose.Types.ObjectId,
                ref: "books",
            },
        ],
        rents: [
            {
                type: mongoose.Types.ObjectId,
                ref: "rent",
            },
        ],
    },
    { timestamps: true}
);
module.exports = mongoose.model("user",user);