import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import Footer from '../Footer'

function Contacts() {
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
    <Contact/>
    </div>   
    </>
  )
}

export default Contacts