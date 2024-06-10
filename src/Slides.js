import { topPicksData } from "./data.js";


function Slides({ id, image, title, description, topPicks, setTopPicks }) {
  const previousSlide = () => {
    setTopPicks((topPicks=>{
        topPicks--;
        if (topPicks <0){
            topPicks = topPicksData.length-1
        }
        return topPicks
    }))};
  const nextSlide = () => {
    setTopPicks((topPicks=>{
        topPicks++;
        if (topPicks > topPicksData.length-1){
            topPicks = 0
        }
        return topPicks
    }))
  };

  return (
    <div>
      <div className="slides-header">
        <h2>Top Picks This Week</h2>
      </div>
      <div className="slides-container">
        <div className="slides-btn">
          <button onClick={previousSlide}>Previous</button>
        </div>
        <div className="slides-image">
          <img
            src={image}
            alt="Slide"
            className="slides-image-picture"
          />
          <div className="slides-text">
            <div className="slides-element">
              <h2>{id}</h2>
            </div>
            <div className="slides-element">
              <h2>{title}</h2>
            </div>
            <div className="slides-element">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="slides-btn">
          <button onClick={nextSlide}>Next</button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Slides;
