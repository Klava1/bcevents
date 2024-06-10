import specialEvent from './special-event.jpg'

function SpecialEvent() {
  return (
<section className="special-event">
      <div className="event-banner">
        <div className="event-content">
          <div className="event-text">
            <h2>Attend a unique event -- White Party on a boat</h2>
            <p>Starting $80 /ticket</p>
            <button className="buy-now-button">Buy now</button>
          </div>
          <div className="event-image-container">
            <img src={specialEvent} alt="Special Event" className="event-image" />
          </div>
        </div>
        <div className="special-badge">SPECIAL<br></br>EVENT</div>
      </div>
    </section>
  );
}

export default SpecialEvent;
