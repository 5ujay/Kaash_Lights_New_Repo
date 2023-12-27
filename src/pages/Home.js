import React from 'react'
import Neoncursor from '../Components/Neoncursor';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import './Home.css';

const Home = () => {

  return (
    <>
    <Navbar />
    <Neoncursor />
    <p className='main-text'>light defines<br />spatial experience<br />as it falls and reflects</p>
    <Footer />
    </>
  )
}

export default Home;