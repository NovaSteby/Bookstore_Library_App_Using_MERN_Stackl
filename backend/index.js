var express = require('express');
var app = express();
require('./connection');
const cors = require("cors");
const books = require('./model/booksModel');
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite  = require("./routes/favourite");
const Cart = require("./routes/cart");
const Rent = require("./routes/rent");
app.use(cors());
app.use(express.json())
app.use(User);
app.use(Books);
app.use(Favourite);
app.use(Cart);
app.use(Rent);


// app.post('/add',async(req,res)=>{
//     try{
//         console.log(req.body)
//         await books(req.body).save()
//         res.send({message:"data added successfully"})
//     }catch(error){
//         console.log(error)
//     }
// })
// app.get('/',(req,res) => {
//     res.send("Hello My Polwin");
// })
app.listen(4000,()=>{
    console.log("Port is up and running");
})