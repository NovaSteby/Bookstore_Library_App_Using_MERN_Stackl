const router = require("express").Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const Book = require("../model/booksModel");
const {authenticateToken} = require("./userAuth");

//add book --admin
router.post("/add-book",authenticateToken,async(req,res) => {

    try {
        const {id} = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
            return  res.status(400).json({message:"You have no access"});
        }
        const book = new Book({
            url:req.body.url,
            title: req.body.title,
            author: req.body.author,
            publicationyear: req.body.publicationyear,
            genre: req.body.genre,
            isbnnumber: req.body.isbnnumber,
            availability: req.body.availability,
 });
        await book.save();
        res.status(200).json({message:"book added successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
});
//update-book
router.put("/update-book",authenticateToken,async(req,res) => {
    try {
             const {bookid} = req.headers;
             await Book.findByIdAndUpdate(bookid,{
                url:req.body.url,
        title: req.body.title,
        author: req.body.author,
        publicationyear: req.body.publicationyear,
        genre: req.body.genre,
        isbnnumber: req.body.isbnnumber,
        availability: req.body.availability,
     });
            
    return res.status(200).json({message:"book updated successfully"});
} catch (error) {
    res.status(500).json({message:"An error occured"});
}
});
//delete - book --admin
router.delete("/delete-book",authenticateToken,async(req,res) => {
    try {
             const {bookid} = req.headers;
             await Book.findByIdAndDelete(bookid);
            
    return res.status(200).json({message:"book deleted successfully"});
} catch (error) {
    res.status(500).json({message:"An error occured"});
}
});
//get all books
router.get("/get-all-books",async(req,res) => {
    try {
            const books = await Book.find().sort();
            return res.json({
                status:"Success",
                data:books,
            });
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"An error occured"});
    }
});
//get recently added books limit 2
router.get("/get-recent-books",async(req,res) => {
    try {
            const books = await Book.find().sort().limit(2);
            return res.json({
                status:"Success",
                data:books,
            });
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"An error occured"});
    }
});
//get book by id
router.get("/get-book-by-id/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.json({
            status:"Success",
            data:book,
        });
    } catch (error) {
        
        console.log(error)
        return res.status(500).json({message:"An error occured"});
    }
});
module.exports = router;