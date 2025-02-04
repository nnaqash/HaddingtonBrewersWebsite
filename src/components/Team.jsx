import React from "react";

const Team = () => {
  const players = [
    {
      id: 1,
      name: "Chris Green",
      number: 23,
      position: "Forward",
      height: "6'7\"",
      favoritePlayer: "Michael Jordan",
      image: "./images/players/chris.jpg",
    },
    {
      id: 2,
      name: "Kashi",
      number: 12,
      position: "Guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/kashi.jpg",
    },
    {
      id: 3,
      name: "Alex",
      number: 12,
      position: "Center",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/alex.png",
    },
    {
      id: 4,
      name: "Cameron",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/cameron.jpg",
    },
    {
      id: 5,
      name: "Euan",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/Euan.jpg",
    },
    {
      id: 6,
      name: "Josh",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/josh.png",
    },
    {
      id: 7,
      name: "Matt",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/matt.jpg",
    },
    {
      id: 8,
      name: "Tiff",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/tiff.jpg",
    },
    {
      id: 9,
      name: "Zack",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/zack.png",
    },
    {
      id: 10,
      name: "Alfie",
      number: 12,
      position: "guard",
      height: "6'3\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/alfie.jpg",
    },
    {
      id: 11,
      name: "Kos",
      number: 12,
      position: "center",
      height: "6'6\"",
      favoritePlayer: "Kobe Bryant",
      image: "./images/players/kos.png",
    },

  ];
  return (
    <div className="container mx-auto text-customWhite">
      {/* Header Section */}
      <section>
        <div className="text-customRed py-4">
          <h1 className="text-center text-4xl font-bold">
            Team for the Season 2024/2025
          </h1>
        </div>
      </section>

      {/* Player Cards Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {players.map((player) => (
            <div key={player.id} className="border border-customBlue rounded-lg shadow-lg m-5 w-full max-w-[320px] text-center bg-customBlue hover:shadow-xl transition-shadow ">
              {/* Image - Full Width */}
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium">{player.name}</h3>
                <p className="mt-2 text-lg">#{player.number} | {player.position}</p>
                <p className="mt-1 text-lg">Height: {player.height}</p>
                <p className="mt-1 text-lg">Favorite Player: {player.favoritePlayer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
