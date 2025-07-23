import React, { useState } from 'react'

const Home = () => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <input
      className='p-2 rounded-3xl'
        type="text"
        placeholder='enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>
        Create My Paste
      </button>
    </div>
  )
}

export default Home