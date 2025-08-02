import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Copy } from 'lucide-react';


const ViewPaste = () => {
  const { id } = useParams();

  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
        <input
          type="text"
          placeholder='enter title here'
          value={paste.title}
          disabled
          className="p-2 rounded-md bg-[#1f1026]/50 text-white placeholder-violet-300 transition duration-300 focus:outline-none focus:ring-2 border border-transparent shadow-md focus:ring-violet-500 hover:border-violet-400  focus:placeholder-transparent w-full"
        />
      </div>
      <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>
      <textarea
            className="rounded-lg w-full bg-[#0c080d]/50 text-white placeholder-violet-300 shadow-inner focus-visible:ring-0 focus:ring-violet-500 focus:placeholder-transparent p-3"

            value={paste.content}
            disabled
            placeholder="enter content here"
            onChange={(e) => setValue(e.target.value)}
            style={{
              caretColor: "#000",
            }}
            rows={20}
          />
      </div>
    </div>
    </div>
  );
};

export default ViewPaste