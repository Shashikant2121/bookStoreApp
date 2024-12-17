import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
       <Navbar />
       <Banner />
       <FreeBook />
       <Footer />
    </>
    
  )
}

export default Home