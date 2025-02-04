import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import Update from "./Update";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Haddington Brewers Basketball Club | Official Website</title>
        <meta name="description" content="Welcome to the official site of Haddington Brewers Basketball Club. Stay updated with match fixtures, results, team news, and highlights." />
        <meta name="keywords" content="Haddington Basketball, Haddington Brewers, Basketball Club, Local Basketball Team, Fixtures, Results, Sports News, Player Stats" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Haddington Brewers Basketball Club" />
        <meta property="og:title" content="Haddington Brewers Basketball Club" />
        <meta property="og:description" content="Follow Haddington Brewers Basketball Club for match fixtures, results, and team updates. Stay connected with the latest club news and highlights!" />
        <meta property="og:url" content="https://haddingtonbrewersbasketballclub.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AboutUs />
      <Update />
    </>
  );
};

export default Home;
