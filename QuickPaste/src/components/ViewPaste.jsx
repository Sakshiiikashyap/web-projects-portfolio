import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("Final Pastes: ", paste);

  return (
    <div className="flex flex-col items-center gap-2 p-10 overflow-hidden min-h-screen w-full  bg-[#0c080d] ">
      <div className="flex items-center gap-2 p-6 ">

        <input
          className="p-2 rounded-xl mt-2 bg-[#1f1026]/50 text-white placeholder-violet-300 transition duration-300 focus:outline-none focus:ring-2 border border-transparent shadow-md focus:ring-violet-500 hover:border-violet-400 w-80 px-4 focus:placeholder-transparent "
          type="text"
          placeholder='enter title here'
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button onClick={createPaste}
        className="bg-violet-600 text-white p-2 mt-2 rounded-md hover:bg-pink-600 transition-all duration-300 ease-in-out font-semibold text-sm shadow-md hover:scale-[1.02] w-40 py-2">
          {
            pasteId ? "Update My Paste"
              : "Create My Paste"
          }
        </button> */}
      </div>

      <div className="mt-2 flex flex-col items-center justify-center gap-2 w-full px-4">
        <textarea
          className="rounded-2xl w-full max-w-3xl bg-[#1f1026]/50 text-white placeholder-violet-300 sha dow-inner p-4 mt-2 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 whitespace-pre-wrap break-words focus:placeholder-transparent"

          value={paste.content}
          placeholder="enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}

        />
      </div>
    </div>
  )
}

export default ViewPaste