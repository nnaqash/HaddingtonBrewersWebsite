import React from "react";

const Fixtures = () => {
  const fixtures = [
    {
      id: 1,
      date: "2024-01-15",
      time: "7:00 PM",
      homeTeam: "The Hoop Masters",
      awayTeam: "Rival Eagles",
      venue: "City Arena",
      venueLink: "https://www.google.com/maps?q=City+Arena",
    },
    {
      id: 2,
      date: "2024-01-22",
      time: "8:00 PM",
      homeTeam: "Sky Hawks",
      awayTeam: "The Hoop Masters",
      venue: "Skyline Court",
      venueLink: "https://www.google.com/maps?q=Skyline+Court",
    },
    {
      id: 3,
      date: "2024-02-01",
      time: "6:30 PM",
      homeTeam: "The Hoop Masters",
      awayTeam: "Ocean Sharks",
      venue: "City Arena",
      venueLink: "https://www.google.com/maps?q=City+Arena",
    },
  ];

  return (
    <div className="container mx-auto text-customWhite py-12">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-center text-5xl font-extrabold uppercase tracking-wide text-customRed">
          Upcoming Fixtures
        </h1>
        <p className="text-center text-lg mt-4 text-customRed opacity-80">
          Don’t miss our exciting matches this season!
        </p>
      </section>

      {/* Fixtures List */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {fixtures.map((fixture) => (
            <div
              key={fixture.id}
              className="bg-customBlue bg-opacity-95 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-8"
            >
              {/* Teams */}
              <h3 className="text-3xl font-bold text-center mb-6">
                <span className="text-customWhite">{fixture.homeTeam}</span>{" "}
                <span className="text-customRed text-5xl">vs</span>{" "}
                <span className="text-customWhite">{fixture.awayTeam}</span>
              </h3>
              {/* Date and Time */}
              <div className="text-center mb-6">
                <p className="text-lg font-medium flex items-center justify-center gap-2">
                  <span>📅</span> <span>{fixture.date}</span>
                </p>
                <p className="text-lg font-medium flex items-center justify-center gap-2">
                  <span>⏰</span> <span>{fixture.time}</span>
                </p>
              </div>
              {/* Venue */}
              <p className="text-center text-lg flex items-center justify-center gap-2">
                <span>📍</span>
                <a
                  href={fixture.venueLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-customRed transition-colors"
                >
                  {fixture.venue}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fixtures;
