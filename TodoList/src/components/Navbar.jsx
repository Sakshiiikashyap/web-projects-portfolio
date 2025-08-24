import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-800 text-white px-6 py-3 shadow-md">
  <div className="logo">
    <span className="font-bold text-2xl tracking-wide">iTask</span>
  </div>
  <ul className="flex gap-6 text-lg">
    <li className="cursor-pointer hover:text-slate-300 transition-colors">Home</li>
    <li className="cursor-pointer hover:text-slate-300 transition-colors">Your Task</li>
  </ul>
</nav>

  )
}

export default Navbar