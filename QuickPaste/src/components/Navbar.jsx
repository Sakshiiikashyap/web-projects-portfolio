import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full text-gray-100 z-50 shadow-[0_2px_8px_rgba(167,139,250,0.3)] backdrop-blur-sm bg-opacity-90"
    style={{ backgroundColor: '#0c080d' }}
    >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* <h1 className="text-2xl font-extrabold tracking-wide text-white">
      <span className="text-violet-400 hover:text-violet-300 transition duration-300">
        Quick
      </span>
      <span>Paste</span>
      </h1> */}
      <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
  QuickPaste
</h1>


    <div className='flex gap-6 text-lg'>
       <NavLink to="/"
       className={({ isActive }) =>
              isActive
                ? 'text-violet-500 font-semibold underline underline-offset-4'
                : 'text-gray-300 hover:text-pink-400 transition duration-300'
            }
       >
        Home
       </NavLink>

       <NavLink to="/pastes"
       className={({ isActive }) =>
              isActive
                ? 'text-violet-500 font-semibold underline underline-offset-4'
                : 'text-gray-300 hover:text-pink-400 transition duration-300'
            }
       >
        Pastes
       </NavLink>
    </div>
    </div>
    </nav>
  );
};

export default Navbar