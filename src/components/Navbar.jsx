
import React from 'react'

const Navbar = () => {
  return (
    <>

<nav className='flex py-5 px-10 items-center justify-between bg-gray-900 text-white'>
<h2 className='text-2xl'>Ayush</h2>

<div className='flex gap-8 items-center'>
  <h4 className='text-xl'>about</h4>
  <h4 className='text-xl'>contacts</h4>
  <h4 className='text-xl'>services</h4>
  <h4 className='text-xl'>Account</h4>

</div>

</nav>
    </>
  )
}

export default Navbar