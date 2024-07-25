const router = require("express").Router();
const {authenticateToken} = require("./userAuth");
const Book = require("../model/booksModel");
const Rent = require("../model/rent");
const User = require("../model/user");

//place rent
router.post("/rent-book", authenticateToken,async (req,res) => {
    try {
        const {id} = req.headers;
        const {rent} = req.body;

        for (const rentData of rent ) {
            const newRent = new Rent({user: id,book: rentData._id});
            const rentDataFromDb = await newRent.save();
            //saving rent in user model
            await User.findByIdAndUpdate(id, {
                $push: {rents: rentDataFromDb._id},
            });

            //clearing cart
            await User.findByIdAndUpdate(id, {
                $pull: {cart: rentData._id},
            });

        }
        return res.json({
            status: "Success",
            message:"Book Rented Successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred"});
    }
})

//get rent history of particular user
router.get("/get-rent-history", authenticateToken,async (req,res) => {
    try {
        const {id} = req.headers;
        const userData = await User.findById(id).populate({
            path: "rents",
            populate: {path: "book"},
        });

        const rentsData = userData.rents.reverse();
        return res.json({
            status: "Success",
            data:rentsData,
        });
        

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred"});

    }
})


module.exports = router;