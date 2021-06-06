import Smartimg from "../assets/Smartimg.png";
function Smart() {
  return (
    <div className="powerful-body row">
      <div className="powerful-img col-12 col-lg-7">
        <img className="smartimg" src={Smartimg} />
      </div>
      <div
        className="powerful-content col-12 col-lg-5"
        style={{ marginTop: "100px" }}
      >
        <div className="powerful-content-heading">Followup</div>
        <div className="powerful-features">
          <div className="feature">
            <div className="powerful-features">
              <div className="feature">
                <div className="feature-desc">
                  Ensure Timely Followups with Leads and Prospects using the
                  Followup Section
                </div>

                <div className="feature-heading">
                  <ul>
                    <li> Followup pending leads</li>
                    <li>
                      Filter out customers by Tags, interest level, and followup
                      date to get to the right customers and create customized
                      campaigns for them.
                    </li>
                    <li>
                      Update user status from followup tab to ensure the list is
                      updated.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="learn-more">Download Extension</button>
      </div>
    </div>
  );
}

export default Smart;
