import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'


function App() {
  const [count, setCount] = useState(0)
  const images = [
    "./images/slider.png",
    "./images/slider2.png",
    "./images/slider3.png",
  ];

  return (
    <>
    <Navbar/>
    <ImageSlider images={images} />
    

      
    </>
  )
}

export default App
