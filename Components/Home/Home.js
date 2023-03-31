import React from "react";
import "./Home.css";
import mahatraia from "../../Assets/Images/mahatria-modal.png";
export const Home = () => {
  return (
    <div className="Home_part">
      <div className="home_rightpart_text">
        <div className="home_title_img">
          <img src={mahatraia} alt="mahatraia" />
        </div>

        <h3 className="home_header">
          Spiritualist | Thought leader | Diviner of infinitheism
        </h3>
        <p className="home_description">
          For over 27 years, Mahatria has been empowering millions across the
          globe to live a life of Holistic Abundance. Experiencing Mahatria and
          His wisdom is Life-changing and helps people to overcome their belief
          systems and conditioning to find breakthroughs in Health, Wealth,
          Love, Bliss, Spiritual Connect.
        </p>
      </div>
    </div>
  );
};
