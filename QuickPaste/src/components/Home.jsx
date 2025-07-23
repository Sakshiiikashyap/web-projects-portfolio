import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  return (
    <div className="pt-24 px-6 min-h-screen text-white">
    <div className="group w-full md:w-72">
      <input
      className="p-3 rounded-xl w-full
               bg-zinc-900 text-white 
               placeholder-violet-400 
               group-hover:placeholder-pink-400
               focus:placeholder-opacity-0
               transition duration-300 ease-in-out
               focus:outline-none focus:ring-2 focus:ring-violet-500 
               hover:ring-1 hover:ring-violet-400"
        type="text"
        placeholder='enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-violet-600 hover:bg-violet-500 transition duration-300 text-white px-6 py-2 rounded-xl font-semibold shadow-md">
        {
          pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button>
    </div>
    </div>
  )
}

export default Home