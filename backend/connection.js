const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://novasteby:novasteby@cluster0.zmbukcr.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to db");
})
.catch((error) => {
    console.log(error)
})