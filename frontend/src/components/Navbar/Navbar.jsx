import React from 'react'
import logos from '../images/logos.png'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const links = [
        {
            title: "Home",
            link:"/",
        },
        
        {
            title: "Books",
            link:"/all-books",
        },
        {
            title: "Cart",
            link:"/cart",
        },
        {
            title: "Profile",
            link:"/profile",
        },
        {
            title: "Admin Profile",
            link:"/profile",
        },

    ];
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);
    if (isLoggedIn == false) {
        links.splice(2,2);
    }
    if (isLoggedIn == true && role ==="user") {
        links.splice(4,1);
    }
    if (isLoggedIn == true && role ==="admin") {
        links.splice(3,1);
    }
  return (
    <div className='flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'> 
        <Link to="/" className='flex items-center'>
            <img
                className='h-10 me-4'
                src={logos} alt='logo'
            />
            <h1 className='text-2xl font-semibold'>BookBazaar</h1>
        </Link>
            <div className='nav-links-bookbazaar flex items-center gap-5'>
                <div className='flex gap-5'>
                    {links.map((items,i) => (
                     <>
                            {items.title === "Profile" || items.title === "Admin Profile" ? (
                        <Link to={items.link}
                            className='hover:text-blue-500 border border-blue-500 hover:bg-white text-white transition-all duration-300'
                            key={i}
                        >
                            {items.title}{" "}
                        </Link> ) :<Link to={items.link}
                            className='hover:text-blue-500 transition-all duration-300'
                            key={i}
                        >
                            {items.title}{" "}
                        </Link>}
                    </>
                    ))}

               </div>
                {isLoggedIn == false && (
                <div className='flex gap-5'>
                    <Link to="/Login" className='px-2 py-1 border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Login</Link>
                    <Link to="/SignUp" className='px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300' >SignUp</Link>
                </div>
                )}
            </div>
    </div>
  )
}

export default Navbar
