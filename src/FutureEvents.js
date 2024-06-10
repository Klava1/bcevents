function FutureEvents({
  futureEvents,
  showMore,
  setShowMore,
  showText,
  setShowText,
  filteredEvents,
  showMoreEvents,
  setShowMoreEvents,
}) {
  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  };
  const handleShowMoreEvents = () => {
    setShowMoreEvents(showMoreEvents + 4);
  };

  return (
    <section>
      <h2 className="section-title">Future Events</h2>
      <div className="event-filters">
        <button
          className="filter-button"
          onClick={() => filteredEvents("all")}
        >
          All
        </button>
        <button
          className="filter-button"
          onClick={() => filteredEvents("tour")}
        >
          Tours
        </button>
        <button
          className="filter-button"
          onClick={() => filteredEvents("lecture")}
        >
          Lectures
        </button>
        <button
          className="filter-button"
          onClick={() => filteredEvents("family")}
        >
          Family
        </button>
      </div>
      <div className="events-grid">
        {futureEvents.slice(0, showMoreEvents).map((element) => {
          const {
            id,
            eventImage,
            eventDate,
            eventName,
            eventDescription,
            eventPrice,
            showMore,
          } = element;
          return (
            <div
              key={id}
              className="event-card"
            >
              <p>{id}</p>
              <img
                src={eventImage}
                alt="futureEvent"
                className="future-event-image"
              />
              <div className="event-details">
                <h3 className="event-date">{eventDate}</h3>
                <h2 className="event-name">{eventName}</h2>
                <p className="event-description">
                  {showMore
                    ? eventDescription
                    : eventDescription.substring(0, 220) + "..."}
                  <button
                    className={`show-more-text ${showMore ? "show-less" : ""}`}
                    onClick={() => showTextClick(element)}
                  >
                    {showMore ? "show less" : "show more"}
                  </button>
                </p>
                <h3 className="event-price">{eventPrice}</h3>
              </div>
            </div>
          );
        })}
      </div>
      {showMoreEvents < futureEvents.length && (
        <button
          className="show-more-events"
          onClick={handleShowMoreEvents}
        >
          Show more events
        </button>
      )}
    </section>
  );
}

export default FutureEvents;
