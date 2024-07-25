import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom";



const ViewBookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);
    
    useSelector
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`http://localhost:4000/get-book-by-id/${id}`
            );
            setData(response.data.data);
        };
        fetch();
    }, []);
    const headers = {
        id:localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        bookid:id,
    };
    const deleteBook = async () => {
       const response = await axios.delete("http://localhost:4000/delete-book",{headers});
       alert(response.data.message);
       navigate("/all-books");
    };
    const handleFavourite = async () => {
        const response = await axios.put("http://localhost:4000/add-book-to-favourite",
        {},{headers} 
        );
        alert(response.data.message);
    }
  return (
    <>
    {Data && (
        <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8 items-start'>
        <div className='bg-zinc-800 w-full lg:w-3/6 '> 
        {" "}
       <div className='flex justify-around bg-zinc-800 p-12 rounded'>
       <img src={Data.url} alt="/" className='h-[50vh] lg:h-[70vh] rounded object-cover' 
        />
         {isLoggedIn === true && role === "user" &&  <div className='flex md:flex-col'>

        <button className='bg-white rounded-full text-3xl p-3 text-red-600' onClick={handleFavourite}><FaHeart /></button>
        {/* <button  className='bg-white rounded-full text-3xl p-3 mt-8 text-blue-500'><FaShoppingCart /></button> */}
    </div>}
    {isLoggedIn === true && role === "admin" &&  <div className='flex md:flex-col'>

    <Link to={`/updateBook/${id}`} className='bg-white rounded-full text-3xl p-3'><FaEdit /></Link>
    <button  className='bg-white rounded-full text-3xl p-3 mt-8' onClick={deleteBook}><MdDelete /></button>
    </div>}
       </div>
        </div>
        <div className='p-4 w-3/6'>
            <h1 className='text-4xl text-zinc-300 font-semibold'>{Data.title}</h1>
            <p className='text-zinc-400 mt-1'>by {Data.author}</p>
            <p className='text-zinc-500 mt-4 text-xl'>{Data.publicationyear}</p>
            <p className='flex mt-4 items-center justify-start text-zinc-400'>{Data.genre}</p>
        </div>    
    </div>

    )}
    
    </>
  );
};

export default ViewBookDetails
