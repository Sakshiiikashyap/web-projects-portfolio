import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { Copy, PlusCircle } from 'lucide-react';


const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Destructure useSearchParams
  const pasteId = searchParams.get("pasteId"); // Get pasteId from the search params
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // If pasteId is present, update the paste
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");

    // Remove the pasteId from the URL after creating/updating a paste
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
                
          <input
            type="text" 
            placeholder='enter title here'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${pasteId ? "w-[80%]" : "w-[85%]"
              } p-2 rounded-md bg-[#1f1026]/50 text-white placeholder-violet-300 transition duration-300 focus:outline-none focus:ring-2 border border-transparent shadow-md focus:ring-violet-500 hover:border-violet-400  focus:placeholder-transparent `}
          />

          <button onClick={createPaste}
            className="bg-violet-600 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 ease-in-out font-semibold text-sm shadow-md hover:scale-[1.02] px-5 py-2 me-2 mb-2">
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
          {pasteId && <button
            className="text-white bg-violet-600 hover:bg-pink-600 transition-all duration-300 ease-in-out shadow-md hover:scale-[1.02] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={resetPaste}>
            <PlusCircle size={20} />
          </button>}
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
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", {
                    position: "top-right",
                  });
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          <textarea
            className="rounded-lg w-full bg-[#0c080d]/50 text-white placeholder-violet-300 shadow-inner focus-visible:ring-0 focus:ring-violet-500 focus:placeholder-transparent p-3"

            value={value}
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

export default Home
