import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Heroimg from '../components/heroImages/Heroimg'
import Footer from '../components/footer/Footer'
import Work from '../components/workCart/Work'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg/>
     <Work/>
     <Footer/>
    </div>
  )
}

export default Home
