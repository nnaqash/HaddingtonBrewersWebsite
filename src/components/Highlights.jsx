import React, { useState } from "react";

const Highlights = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  const highlights = [
    {
      id: 1,
      title: "Edinburgh Vipers Vs Haddington Brewers - Game Highlights",
      description: "Relive the best moments from this intense matchup!",
      videoLink: "https://youtu.be/_W8ZSFQioJY",
      thumbnail: "./images/thumb/Vipers.jpg",
      duration: "3:26",
      date: "Dec 03 2024",
    },
    {
      id: 2,
      title: "Polonia Masters Vs Haddington Brewers - Thrilling Moments",
      description: "An unforgettable game with incredible plays.",
      videoLink: "https://www.instagram.com/p/C-I7rNJtgJX/",
      thumbnail: "./images/thumb/polonia.jpg",
      duration: "10:15",
      date: "Nov 29 2024",
    },
    {
      id: 3,
      title: "Haddington Brewers Vs LL Galaxy B - Intense Gameplay",
      description: "Watch how The Hoop Masters dominated the court!",
      videoLink: "https://www.loom.com/share/c613f1a803ef42ed9a234ed9f59ce01a",
      thumbnail: "./images/thumb/galaxy.jpg",
      duration: "1:30",
      date: "Jan 10 2025",
    },
  ];

  const filteredHighlights = highlights.filter(
    (highlight) =>
      highlight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      highlight.date?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Helmet>
        <title>Match Highlights | Haddington Brewers Basketball Club</title>
        <meta name="description" content="Watch the best match highlights, top plays, and exciting moments from Haddington Brewers Basketball Club." />
        <meta name="keywords" content="Basketball Highlights, Haddington Basketball, Match Highlights, Best Plays, Top Moments, Game Recap" />
      </Helmet>
    <div className="container mx-auto bg-customBlue text-customWhite py-12 relative top-10">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-center text-5xl font-extrabold uppercase tracking-wide text-customRed">
          Game Highlights
        </h1>
        <p className="text-center text-lg mt-4 opacity-80">
          Watch the best moments from our recent games!
        </p>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customRed text-black"
        />
      </div>

      {/* Highlights List */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
          {filteredHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-customWhite bg-opacity-10 rounded-lg shadow-lg p-6 flex flex-col relative min-h-[450px]" // Increased height here
            >
              
              {/* Video Thumbnail */}
              <div className="relative mb-4">
                <img
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  className="w-full h-80 object-contain rounded-lg" // Ensure image fits without cropping
                />
                {/* Duration Overlay */}
                <span className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
                  {highlight.duration}
                </span>
              </div>
              {/* Video Title */}
              <h3 className="text-2xl font-bold mb-2 text-center">
                {highlight.title} 
                
              </h3>
              {/* Date */}
              <span className=" text-center text-white text-xs px-3 py-1 rounded-md">
                {highlight.date}
              </span>
              {/* Video Description */}
              <p className="text-sm opacity-80 mb-4 text-center">
                {highlight.description}
                
              </p>
              {/* Watch on YouTube Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => window.open(highlight.videoLink, "_blank")}
                  className="bg-customRed text-customWhite py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Watch on YouTube
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
    
  );
};

export default Highlights;
