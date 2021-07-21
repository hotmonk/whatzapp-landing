import "./feedback.css";

function Feedback(params) {
  var mobile_no;

  var numberInfo = window.location.pathname;
  mobile_no = numberInfo.substring(10, numberInfo.length);
  console.log(mobile_no);

  console.log("feedback path");
  localStorage.setItem("mobile", mobile_no);
  setTimeout(() => {
    var body = {
      user_mobile: mobile_no,
    };
    const postUninstallStatus = async (body) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "https://eazybe.com/api/v1/whatzapp/updateUninstallStatus",
        requestOptions
      );
      const data = await response.json();

      console.log(data);
    };
    postUninstallStatus(body);
  }, 5000);

  return (
    <div className="main-block">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeGkd7NEz93Ne_H73dsJMMgmKNhGPOGgBl1mSbduCmSVZdUXg/viewform?embedded=true"
        width="640"
        height="1397"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );

  //   return (
  //     <div className="main-block">
  //       <form onSubmit={feedbackSubmitHandler}>
  //         <div>
  //           <h1>We are sad to see you go 😢</h1>
  //           <p>
  //             Before you close this, please let us know how can we improve. Your
  //             feedback is very important!
  //           </p>
  //         </div>

  //         <hr></hr>

  //         <div className="question-block">
  //           <p className="question">
  //             I Uninstalled eazybe Chrome Extension because
  //             <span className="required">*</span>
  //           </p>
  //           <div className="answer">
  //             <div>
  //               <input type="checkbox" value="none" id="rOne" name="how-hear" />
  //               <label for="rOne" className="radio">
  //                 Login Issues
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rTwo" name="how-hear" />
  //               <label for="rTwo" className="radio">
  //                 Got my work done
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rThree" name="how-hear" />
  //               <label for="rThree" className="radio">
  //                 Can't afford, it is too expensive
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rFour" name="how-hear" />
  //               <label for="rFour" className="radio">
  //                 Sync Issue
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rFive" name="how-hear" />
  //               <label for="rFive" className="radio">
  //                 Missing Features
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rFive" name="how-hear" />
  //               <label for="rFive" className="radio">
  //                 Missing Features
  //               </label>
  //             </div>
  //             <div>
  //               <input type="checkbox" value="none" id="rFive" name="how-hear" />
  //               <label for="rFive" className="radio">
  //                 Other
  //               </label>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="question-block">
  //           <p className="question">
  //             How did you find about the Chrome Extension?
  //           </p>
  //           <div className="answer">
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 value="none"
  //                 id="radioOne"
  //                 name="assessment"
  //               />
  //               <label for="radioOne" className="radio">
  //                 Google
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 value="none"
  //                 id="radioTwo"
  //                 name="assessment"
  //               />
  //               <label for="radioTwo" className="radio">
  //                 Youtube
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 value="none"
  //                 id="radioThree"
  //                 name="assessment"
  //               />
  //               <label for="radioThree" className="radio">
  //                 Quora
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 value="none"
  //                 id="radioFour"
  //                 name="assessment"
  //               />
  //               <label for="radioFour" className="radio">
  //                 Facebook
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 value="none"
  //                 id="radioFive"
  //                 name="assessment"
  //               />
  //               <label for="radioFive" className="radio">
  //                 Linkedin
  //               </label>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="question-block">
  //           <p className="question">
  //             What can we do better? (Any feedback is Welcome! This will help us
  //             improve & make the Chrome Extension better)
  //             <span className="required">*</span>
  //             <small>
  //               And thank you again for filling out the eazybe feedback form
  //             </small>
  //           </p>
  //           <div className="answer">
  //             <textarea rows="5" required></textarea>
  //           </div>
  //         </div>
  //         <div className="question-block">
  //           <div className="question">
  //             <p>
  //               If you want us to help you with your problem, please share your
  //               contact details: (Promise, we won't spam)
  //             </p>
  //           </div>
  //           <div className="answer">
  //             <input className="seminar-title" type="text" name="name" />
  //           </div>
  //         </div>
  //         <div className="btn-block">
  //           <button type="submit" href="/">
  //             Send
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   );
}

export default Feedback;
