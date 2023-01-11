import React from 'react'
import Search from '../../Components/Search/Search'
import Middle from '../../Components/Middle/Middle'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search />
      <Middle />
      <Footer/>
    </div>
  )
}

export default Home