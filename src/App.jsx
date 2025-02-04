import { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TopScroll from "./components/TopScroll";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <TopScroll /> {/* This ensures scrolling happens on route changes */}
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
