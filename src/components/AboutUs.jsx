import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-customBlue text-customWhite m-5 flex flex-col md:flex-row text-center">
      {/* Image Section */}
      <div className="flex justify-center md:w-1/2 p-4">
        <img
          src="./images/cover.jpg"
          alt="Basketball Team"
          className="w-full max-h-[600px] object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-6 py-6 flex">
        <p className="text-lg md:text-xl leading-loose text-center">
          <strong className="text-3xl md:text-4xl">
            The haddington brewers basketball &#127936;
          </strong>
          <br />
          <br />
          <strong className="text-2xl md:text-3xl">Who are we?</strong>
          <br />
          We are a community-run senior men’s basketball club based in
          Haddington and competing in the Lothian Basketball Association's
          Lothian League (Senior Men’s Div 4). We started as a group of guys who
          met weekly at Knox Academy to enjoy recreational basketball. Through
          connections with players in other teams, we began arranging friendly
          matches against teams such as Boroughmuir Blaze and Gracemount
          Panthers. From this, the Haddington Brewers were born. In 2023, we
          registered as an official club and entered the 23/24 Lothian League.
          <br />
          <br />
          <strong className="text-2xl md:text-3xl">Our Aim</strong>
          <br />
          We want to create an opportunity for basketball to flourish in East
          Lothian. The community aspect is essential to us. We welcome people of
          all abilities to join. Our goal is to grow as a team and foster a love
          for the game.
          <br />
          <br />
          Our training sessions are every Thursdays at 20:00 - 21:30 (depending on school holidays).
          <br />
          Join us @ Address: Knox Academy, Pencaitland Road, Haddington EH41 4DT.<br />
          <a
            href="https://www.google.com/maps/dir//Pencaitland+Road,+Haddington+EH41+4DT/@55.9532291,-2.8696744,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4887a659080513a7:0xbe3a534430329099!2m2!1d-2.7873309!2d55.9533179?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Get Directions
          </a>         
        </p>
        
      </div>
    </div>
  );
};

export default AboutUs;
