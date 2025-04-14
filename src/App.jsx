import React from 'react'
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Gallery/>
      <Reviews/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App