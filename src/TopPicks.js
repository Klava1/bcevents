function TopPicks({ topPicks }) {
    if (!topPicks) {
      return <div>No top picks available</div>;
    }
  
    return (
      <div>
        <section className="top-picks-container">
          <h3>Top Picks This Week</h3>
          <div className="top-picks-grid">
            {topPicks.map((pick) => {
              const { id, image, title, description } = pick;
              return (
                <div key={id} className="top-pick-card">
                  <img src={image} alt={title} className="top-pick-image" />
                  <div className="top-pick-details">
                    <h2 className="top-pick-title">{title}</h2>
                    <p className="top-pick-description">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
  
  export default TopPicks;
