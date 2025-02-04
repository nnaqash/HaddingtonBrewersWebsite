import React from "react";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
const Fixtures = () => {
  const fixtures = [
    {
      id: 1,
      date: "30/01/25",
      time: "08:10 PM",
      homeTeam: "Haddington Brewers",
      awayTeam: "Southsice cartographers",
      venue: "Knox Academy",
      venueLink: "https://www.google.co.uk/maps/place/Knox+Academy/@55.9532596,-2.7898494,17z/data=!3m1!4b1!4m6!3m5!1s0x4887a659080513a7:0xbe3a534430329099!8m2!3d55.9532566!4d-2.7872745!16s%2Fm%2F027y2l4?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 2,
      date: "07/02/25",
      time: "8:15 PM",
      homeTeam: "Gracemount Panthers A",
      awayTeam: "Haddington Brewers",
      venue: "Oriam",
      venueLink: "https://www.google.co.uk/maps/place/Oriam/@55.9087832,-3.3191484,17z/data=!3m1!4b1!4m6!3m5!1s0x4887c414c7edf8dd:0x5166430b8d83352!8m2!3d55.9087802!4d-3.3165735!16s%2Fg%2F11cs4kn5sy?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 3,
      date: "19/02/25",
      time: "7:45 PM",
      homeTeam: "West Lothian Wolves B",
      awayTeam: "Haddington Brewers",
      venue: "West Calder High School",
      venueLink: "https://www.google.co.uk/maps/place/West+Calder+High+School/@55.8535962,-3.5621645,17z/data=!3m1!4b1!4m6!3m5!1s0x4887de955f002f2f:0xc0df1221d23b314!8m2!3d55.8535932!4d-3.5595896!16s%2Fm%2F06_v99g?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 4,
      date: "07/03/25",
      time: "20:15",
      homeTeam: "Livingston Raptors",
      awayTeam: "Haddington Brewers",
      venue: "ORIAM",
      venueLink: "https://www.google.co.uk/maps/place/Oriam/@55.9087832,-3.3191484,17z/data=!3m1!4b1!4m6!3m5!1s0x4887c414c7edf8dd:0x5166430b8d83352!8m2!3d55.9087802!4d-3.3165735!16s%2Fg%2F11cs4kn5sy?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 5,
      date: "21/03/25",
      time: "20:15",
      homeTeam: "Haddington Brewers",
      awayTeam: "West Lothian Wolves B",
      venue: "ORIAM",
      venueLink: "https://www.google.co.uk/maps/place/Oriam/@55.9087832,-3.3191484,17z/data=!3m1!4b1!4m6!3m5!1s0x4887c414c7edf8dd:0x5166430b8d83352!8m2!3d55.9087802!4d-3.3165735!16s%2Fg%2F11cs4kn5sy?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 6,
      date: "27/03/25",
      time: "20:10",
      homeTeam: "Haddington Brewers",
      awayTeam: "Livingston Raptors",
      venue: "Knox Academy",
      venueLink: "https://www.google.co.uk/maps/place/Knox+Academy/@55.9532596,-2.7898494,17z/data=!3m1!4b1!4m6!3m5!1s0x4887a659080513a7:0xbe3a534430329099!8m2!3d55.9532566!4d-2.7872745!16s%2Fm%2F027y2l4?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 7,
      date: "04/04/25",
      time: "20:15",
      homeTeam: "Southside Cartographers",
      awayTeam: "Haddington Brewers",
      venue: "ORIAM",
      venueLink: "https://www.google.co.uk/maps/place/Oriam/@55.9087832,-3.3191484,17z/data=!3m1!4b1!4m6!3m5!1s0x4887c414c7edf8dd:0x5166430b8d83352!8m2!3d55.9087802!4d-3.3165735!16s%2Fg%2F11cs4kn5sy?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 8,
      date: "TBC",
      time: "TBC",
      homeTeam: "Polonia Pleasance MastersB",
      awayTeam: "Haddington Brewers",
      venue: "TBC",
      venueLink: "TBC",
    },
    
  ];

  return (
    <>
    <Helmet>
        <title>Match Fixtures | Haddington Brewers Basketball Club</title>
        <meta name="description" content="Check out the latest match fixtures and game schedule for Haddington Brewers Basketball Club. Don't miss a game!" />
        <meta name="keywords" content="Haddington Basketball Fixtures, Match Schedule, Upcoming Games, Basketball Matches, Team Fixtures" />
      </Helmet>
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
    </>
    
  );
};

export default Fixtures;
