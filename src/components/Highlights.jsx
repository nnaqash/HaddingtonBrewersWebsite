import React from "react";

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      title: "The Hoop Masters vs Rival Eagles - Game Highlights",
      videoLink: "",
      date: "January 15, 2024",
    },
    {
      id: 2,
      title: "Sky Hawks vs The Hoop Masters - Thrilling Moments",
      videoLink: "",
      date: "January 22, 2024",
    },
    {
      id: 3,
      title: "The Hoop Masters vs Ocean Sharks - Intense Gameplay",
      videoLink: "",
      date: "February 1, 2024",
    },
  ];

  return (
    <div className="container mx-auto rounded-md text-customWhite py-12">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-center text-5xl font-extrabold uppercase tracking-wide text-customRed ">
          Game Highlights
        </h1>
        <p className="text-center text-lg mt-4  opacity-80 text-customRed">
          Relive the best moments from our recent games!
        </p>
      </section>

      {/* Highlights List */}
      <section>
        <div className="grid grid-cols-1 gap-12 px-6 bg-customBlue py-5 ">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-customWhite bg-opacity-10 rounded-xl shadow-xl p-6 h-[500px] flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-customWhite mb-4 text-center">
                {highlight.title}
              </h3>
              {/* Date */}
              <p className="text-right text-sm font-light mb-4">
                📅 {highlight.date}
              </p>
              {/* Video */}
              <div className="flex-grow">
                <iframe
                  src={highlight.videoLink}
                  title={highlight.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Highlights;
