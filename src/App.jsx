import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import AboutUs from './components/AboutUs'
import Update from './components/Update'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)
  const images = [
    "./images/slider.png",
    "./images/slider2.png",
    "./images/slider3.png",
  ];

  return (
    <>
    <div className='bg-blue-200'>
    <Navbar/>    
    <AboutUs/>
    <ImageSlider images={images} />
    <Update/>
    <Footer/>
    </div>
    
    

      
    </>
  )
}

export default App
