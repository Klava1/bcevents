import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import FutureEvents from "./FutureEvents";
import { useState } from "react";
import { data, topPicksData } from "./data.js";
import MainBanner from "./MainBanner.js";
import SpecialEvent from "./SpecialEvent.js";
import Footer from "./Footer.js";
import Slides from "./Slides.js";
import AboutUs from "./AboutUs.js";
import Blog from "./Blog.js";

function App() {
  const [futureEvents, setFutureEvents] = useState(data);
  const [topPicks, setTopPicks] = useState(0);
  const { id, image, title, description } = topPicksData[topPicks];
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(4);

  const chosenEvents = (searchTerm) => {
    if (searchTerm === "all") {
      setFutureEvents(data);
    } else {
      const newEvents = data.filter((element) =>
        element.searchTerm.includes(searchTerm)
      );
      setFutureEvents(newEvents);
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainBanner />
                <FutureEvents
                  futureEvents={futureEvents}
                  showMore={showMore}
                  setShowMore={setShowMore}
                  showText={showText}
                  setShowText={setShowText}
                  filteredEvents={chosenEvents}
                  showMoreEvents={showMoreEvents}
                  setShowMoreEvents={setShowMoreEvents}
                />
                <SpecialEvent />
                <Slides
                  topPicks={topPicks}
                  setTopPicks={setTopPicks}
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                />
              </>
            }
          />
          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/about"
            element={<AboutUs />}
          />
          <Route
            path="/checkout"
            element={<div>Checkout Page</div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
