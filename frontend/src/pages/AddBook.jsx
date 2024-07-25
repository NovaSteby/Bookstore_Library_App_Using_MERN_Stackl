import React,{useState} from 'react';
import axios from 'axios';

const AddBook = () => {
    const [Data,setData] = useState({
        url:"",
        title:"",
        author:"",
        publicationyear:"",
        genre:"",
        isbnnumber:"",
        availability:"",
    });
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const change = (e) => {
        const {name,value} = e.target;
        setData({...Data,[name]:value});
    };
    const submit = async () => {
        try {
            if(
                Data.url === "" ||
                Data.title === "" ||
                Data.author === "" ||
                Data.publicationyear === "" ||
                Data.genre === "" ||
                Data.isbnnumber === "" ||
                Data.availability === "" 

            ){
                alert("All fields are required");
            } else {
                const response = await axios.post("http://localhost:4000/add-book",
                    Data,
                    {headers}
                );
                setData({
                    url:"",
                    title:"",
                    author:"",
                    publicationyear:"",
                    genre:"",
                    isbnnumber:"",
                    availability:"",
                });
                alert(response.data.message);
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    };
  return (
    <div className='h-[100%] p-0 md:p-4'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            Add Book
        </h1>
        <div className='p-4 bg-zinc-800 rounded'>
            <div>
                <label htmlFor='' className='text-zinc-400'>
                    Image
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='url of image'
                    name='url'
                    required
                    value={Data.url}
                    onChange={change}
                />
            </div>
            <div className='mt:4'>
                <label htmlFor='' className='text-zinc-400'>
                    Title
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='Book Title'
                    name='title'
                    required
                    value={Data.title}
                    onChange={change}
                />
            </div>
            <div className='mt:4'>
                <label htmlFor='' className='text-zinc-400'>
                    Author
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='Book Author'
                    name='author'
                    required
                    value={Data.author}
                    onChange={change}
                />
            </div>
            <div className='mt:4 '>
                <label htmlFor='' className='text-zinc-400'>
                    Publication Year
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='publication year'
                    name='publicationyear'
                    required
                    value={Data.publicationyear}
                    onChange={change}
                />
            </div>
            <div className='mt:4'>
                <label htmlFor='' className='text-zinc-400'>
                    Genre
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='genre'
                    name='genre'
                    required
                    value={Data.genre}
                    onChange={change}
                />
            </div>
            <div className='mt:4'>
                <label htmlFor='' className='text-zinc-400'>
                    ISBN Number
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='isbn number'
                    name='isbnnumber'
                    required
                    value={Data.isbnnumber}
                    onChange={change}
                />
            </div>
            <div className='mt:4'>
                <label htmlFor='' className='text-zinc-400'>
                    Availability
                </label>
                <input
                    type="text"
                    className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                    placeholder='Availability of the Book'
                    name='availability'
                    required
                    value={Data.availability}
                    onChange={change}
                />
            </div>
            <button
                className='mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all '
                onClick={submit}
                >
                    Add Book
            </button>
        </div>
    </div>
  );
};

export default AddBook;
