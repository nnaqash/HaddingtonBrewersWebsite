import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-customBlue text-customWhite m-5 flex flex-col md:flex-row text-center">
      {/* Image Section */}
      <div className="flex justify-center md:w-1/2">
        <img
          src="./images/cover.jpg"
          alt="Basketball Team"
          className="w-full h-auto max-h-[1100px]  object-cover p-7"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-5 py-5 flex ">
        <p className="text-4xl leading-loose font-semibold py-10 ">
          <strong>Who are we?</strong><br /> We are a community ran senior mens
          basketball club based in Haddington and competing in the Lothian
          Basketball Associations Lothian League (Senior Mens Div 4).  We
          started off as a group of guys who would meet weekly at Knox Academy
          to enjoy recreational basketball. Through connections to players in
          other teams we would arrange friendlies against competing teams such
          as Boroughmuir Blaze and Gracemount Panthers.  From this the
          Haddington Brewers were born.  In 2023 we registered as an official
          club and entered into the 23/24 Lothian League. 
          <br />
          <br />
          <strong>Our Aim</strong>
          <br />
          We want to create an opportunity for basketball to flourish in East
          Lothian. We hold dear to the community part of that. We welcome people
          of all abilities to join.  We want to grow as a team and to grow the
          love for the game. 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
