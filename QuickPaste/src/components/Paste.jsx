import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';


const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="pt-20 px-4 min-h-screen bg-[#0c080d] text-white">
      <div>
        <input
          className='p-2 rounded-xl mt-2 bg-[#1f1026]/50 text-white placeholder-violet-300 transition duration-300 focus:outline-none focus:ring-2 border border-transparent shadow-md focus:ring-violet-500 hover:border-violet-400 max-w-3xl w-full px-4 focus:placeholder-transparent'
          type='search'
          placeholder='search here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='flex flex-col gap-5 items-center'>
          {
            filteredData.length > 0 && filteredData.map((paste, index) => {
              return (
                <div className='bg-[#1f1026]/50 w-full max-w-3xl p-3 rounded-xl border border-[#231a32] shadow-md mt-4'
                key={paste.id || index}>
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button className='bg-[#0c080d] focus:ring-violet-500 hover:border-violet-400 transition-all duration-300 ease-in-out px-4 py-2 mt-2 rounded-md shadow-md hover:scale-[1.02] font-semibold'>
                      <a href={`/?pasteId=${paste?._id}`}
                      className='text-white'>
                        Edit
                      </a>
                    </button>
                    
                    <button className='bg-[#0c080d] focus:ring-violet-500 hover:border-violet-400 transition-all duration-300 ease-in-out px-4 py-2 mt-2 rounded-md shadow-md hover:scale-[1.02] font-semibold'>
                      <a href={`/pastes/${paste?._id}`}
                      className='text-white'
                      >
                        View
                      </a>
                    </button>

                    <button className='bg-[#0c080d] focus:ring-violet-500 hover:border-violet-400 transition-all duration-300 ease-in-out px-4 py-2 mt-2 rounded-md shadow-md hover:scale-[1.02] font-semibold' 
                    onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button className='bg-[#0c080d] focus:ring-violet-500 hover:border-violet-400 transition-all duration-300 ease-in-out px-4 py-2 mt-2 rounded-md shadow-md hover:scale-[1.02] font-semibold'
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipboard")
                    }}>
                      Copy
                    </button>

                    <button className='bg-[#0c080d] focus:ring-violet-500 hover:border-violet-400 transition-all duration-300 ease-in-out px-4 py-2 mt-2 rounded-md shadow-md hover:scale-[1.02] font-semibold'
                    onClick={() => {
                      const shareUrl = `${window.location.origin}/paste/${paste._id}`;
                      navigator.clipboard.writeText(shareUrl);
                      toast.success("Link copied to clipboard!");
                    }}>
                      Share
                    </button>
                  </div>
                </div>
              )
            }
            )
          }
        </div >
      </div >
    </div>
  )
}

export default Paste