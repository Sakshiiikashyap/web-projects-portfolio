import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';


const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title:title,
      content: value,
      _id: pasteId ||
        Date.now().toString(36),
      createdAt:new Date().toISOString
      (),
    }

    if(pasteId) {
      //update
      dispatch(updateToPastes(paste));
    }
    else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creation and updation
    setTitle('');
    setValue('');
    setSearchParams({});
    
  }

  return (
    <div className="flex flex-col items-center gap-2 p-10 overflow-hidden min-h-screen w-full  bg-[#0c080d] ">
      <div className="flex items-center gap-2 p-6 ">

        <input
          className="p-2 rounded-xl mt-2 bg-[#1f1026]/50 text-white placeholder-violet-300 transition duration-300 focus:outline-none focus:ring-2 border border-transparent shadow-md focus:ring-violet-500 hover:border-violet-400 w-80 px-4 focus:placeholder-transparent "
          type="text"
          placeholder='enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste}
        className="bg-violet-600 text-white p-2 mt-2 rounded-md hover:bg-pink-600 transition-all duration-300 ease-in-out font-semibold text-sm shadow-md hover:scale-[1.02] w-40 py-2">
          {
            pasteId ? "Update My Paste"
              : "Create My Paste"
          }
        </button>
      </div>

      <div className="mt-2 flex flex-col items-center justify-center gap-2 w-full px-4">
        <textarea
          className="rounded-2xl w-full max-w-3xl bg-[#1f1026]/50 text-white placeholder-violet-300 sha dow-inner p-4 mt-2 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 whitespace-pre-wrap break-words focus:placeholder-transparent"

          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}

        />
      </div>
    </div>
  )
}

export default Home