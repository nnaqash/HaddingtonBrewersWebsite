import React from 'react';

const Update = () => {
  return (
    <div className="bg-customRed m-5 text-center text-customWhite relative top-52 ">
      <h1 className="text-7xl mb-6 font-bold">Latest Updates</h1>
      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 pb-8">
        {/* Card 1 */}
        <div className="bg-customBlue border-4 border-customRed rounded-lg shadow-lg w-full max-w-[600px] mx-auto p-6 flex flex-col items-center ">
          {/* Image */}
          <div className="w-full max-w-[600px] max-h-[400px] overflow-hidden rounded-md mb-6">
            <img
              src="./images/Who.png"
              alt="Basketball Action"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Date */}
          <p className="text-3xl font-bold mb-4">19/10/2024</p>
          {/* Text */}
          <p className="leading-8 text-left text-2xl">
            As we gear up for the exciting 2024/2025 basketball season starting
            this September, let’s take a fun trip down memory lane to revisit
            some of the highlights from our triumphant first win in the
            2023/2024 season!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-customBlue border-4 border-customRed rounded-lg shadow-lg w-full max-w-[600px] mx-auto p-6 flex flex-col items-center ">
          <div className="w-full max-w-[600px] max-h-[400px] overflow-hidden rounded-md mb-6">
            <img
              src="./images/teamDinner.jpg"
              alt="Another Basketball Action"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-3xl font-bold mb-4">25/11/2024</p>
          <p className="leading-8 text-left text-2xl">
           Last Friday, we fueled up for the season ahead with a slam dunk of a team dinner—delicious, freshly made, and packed with flavor. Just like a great game, every bite hit the spot! With multiple branches across the UK, including two right here in Edinburgh, we highly recommend checking them out. Time to eat like champions and play like pros!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-customBlue border-4 border-customRed rounded-lg shadow-lg w-full max-w-[600px] mx-auto p-6 flex flex-col items-center ">
          <div className="w-full max-w-[600px] max-h-[400px] overflow-hidden rounded-md mb-6">
            <img
              src="./images/sponsor.jpg"
              alt="Team Huddle"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-3xl font-bold mb-4">10/12/2024</p>
          <p className="leading-8 text-left text-2xl">
          Brewers are excited to announce that Casserole Wang is our official sponsor for the 2024/2025 season!
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-customBlue border-4 border-customRed rounded-lg shadow-lg w-full max-w-[600px] mx-auto p-6 flex flex-col items-center ">
          <div className="w-full max-w-[600px] max-h-[400px] overflow-hidden rounded-md mb-6">
            <img
              src="./images/practice.jpg"
              alt="Victory Moment"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-3xl font-bold mb-4">05/01/2025</p>
          <p className="leading-8 text-left text-2xl">
          Great basketball training is not just about drills and plays—it's about building discipline, teamwork, and resilience. Every shot, every sprint, and every rebound brings us closer to greatness. Stay dedicated, stay focused, and remember: champions are made in practice!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Update;
