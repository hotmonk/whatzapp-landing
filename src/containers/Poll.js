import Pollimg from "../assets/Pollimg.png";
function Poll() {
  return (
    <div className="powerful-body row">
      <div className="powerful-content col-12 col-lg-5">
        <div className="powerful-content-heading">Polls</div>
        <div className="powerful-features">
          <div className="feature">
            <div className="feature-desc">
              Take Feedback, Survey or Suggestions from your customers using
              Poll feature of WhatZapp
            </div>
            <div className="feature-heading">
              <ul>
                <li>Poll on Whatsapp</li>
                <li>Poll Statistics</li>
                <li>Voters</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="learn-more">Download Extension</button>
      </div>

      <div className="powerful-img col-12 col-lg-7">
        <img className="pimg" src={Pollimg} />
      </div>
    </div>
  );
}

export default Poll;
