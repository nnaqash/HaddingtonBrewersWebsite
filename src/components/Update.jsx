import React from 'react';

const Update = () => {
  // Array of updates
  const updates = [
    {
      id: 1,
      date: "19/10/2024",
      image: "./images/Who.png",
      description:
        "As we gear up for the exciting 2024/2025 basketball season starting this September, let’s take a fun trip down memory lane to revisit some of the highlights from our triumphant first win in the 2023/2024 season!",
    },
    {
      id: 2,
      date: "25/11/2024",
      image: "./images/teamDinner.jpg",
      description:
        "Last Friday, we fueled up for the season ahead with a slam dunk of a team dinner—delicious, freshly made, and packed with flavor. Just like a great game, every bite hit the spot! With multiple branches across the UK, including two right here in Edinburgh, we highly recommend checking them out. Time to eat like champions and play like pros!",
    },
    {
      id: 3,
      date: "10/12/2024",
      image: "./images/sponsor.jpg",
      description:
        "Brewers are excited to announce that Casserole Wang is our official sponsor for the 2024/2025 season!",
    },
    {
      id: 4,
      date: "05/01/2025",
      image: "./images/practice.jpg",
      description:
        "Great basketball training is not just about drills and plays—it’s about building discipline, teamwork, and resilience. Every shot, every sprint, and every rebound brings us closer to greatness. Stay dedicated, stay focused, and remember: champions are made in practice!",
    },
  ];

  return (
    <div className="bg-customRed text-center text-customWhite py-8 relative z-10" style={{ bottom: "50px" , top:"50px" }}>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Latest Updates</h1>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 px-6">
        {/* Dynamically render updates using map */}
        {updates.map((update) => (
          <div
            key={update.id}
            className="bg-customBlue border-2 border-customRed rounded-lg shadow-md flex flex-col items-center p-5"
          >
            {/* Image */}
            <div className="w-full h-[250px] md:h-[300px] overflow-hidden rounded-md mb-5">
              <img
                src={update.image}
                alt={`Update ${update.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Date */}
            <p className="text-xl md:text-2xl font-bold mb-4">{update.date}</p>
            {/* Description */}
            <p className="leading-relaxed text-sm md:text-base text-left">
              {update.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
