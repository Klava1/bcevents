import "./App.css";

function AboutUs() {
  return (
    <div className="parent-container">
      <div class="about-us-container">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us-description">
          British Chic is a closed multi-ethnic group for Russian speakers,
          aimed at informal exchange of information on pressing issues of life
          in London and the UK. Our group topics include social and cultural
          life, tourism, medicine, and education in the UK.
        </p>
        <h2 className="about-us-header">Rules</h2>
        <ul className="about-us-list">
          <li className="about-us-element">
            Spam, commercial advertisements, photo/video content, memes, and
            off-topic posts are prohibited.
          </li>
          <li className="about-us-element">
            Creating separate groups and sending invitations without approval
            from the group admins is prohibited.
          </li>
          <li className="about-us-element">
            Participants who violate the rules will be excluded from the group.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
