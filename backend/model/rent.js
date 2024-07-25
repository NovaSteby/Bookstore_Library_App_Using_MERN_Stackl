const mongoose = require("mongoose");
const rent = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref:"user",
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref:"books",
        },
        status: {
            type:String,
            default:"Available",
            enum:["Available","Rented"]
        }
    },
    {timestamps: true}
);
module.exports = mongoose.model("rent",rent);