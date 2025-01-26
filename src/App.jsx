import { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";


function App() {
  const [count, setCount] = useState(0);
  const images = [
    "./images/slider.png",
    "./images/slider2.png",
    "./images/slider3.png",
  ];

  return (
    <>
      
      <div className="bg-blue-200">
        {/* Navbar */}
        <Navbar />

        {/* Dynamic Content */}
        <main className="relative top-24">
          <Outlet /> {/* Renders child route components */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
