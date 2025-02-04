
import AboutUs from './AboutUs';
import ImageSlider from './ImageSlider';
import Update from './Update';

const Home = () => {
  const images = [
    "./images/slider.png",
    "./images/slider2.png",
    "./images/slider3.png",
  ];

  return (
    <>
      <AboutUs />      
      <Update />
    </>
  );
};

export default Home;
