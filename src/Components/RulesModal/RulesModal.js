import "./CSS/style.css";

import { useEffect, useState } from "react";

export function RulesModal() {
  const [userResponse, setUserResponse] = useState(null);
  const [userName, setUserName] = useState("Guest");

  const modalButtonsHandler = (e) => {
    let clickOrigin = e.target.value === "start" ? "start" : "back";
    setUserResponse(clickOrigin);
  };

  return (
    <>
      <div className="modal --verticle-flex --has-gap --has-padding">
        <div className="modal-header --horizontal-flex">
          <h3 className="sub-heading --h3 --has-padding">
            You have selected{" "}
            <span className="quiz-selected-name">
              Marvel Cinematic Universe
            </span>{" "}
            quiz, but before getting started, let's get you started with the
            rules and everything.
          </h3>
        </div>
        <div className="modal-main --verticle-flex --has-gap --has-padding">
          <div className="modal__container --has-padding">
            <p className="modal__container-heading">Rules</p>
            <ul>
              <li>There will be 10 questions in total.</li>
              <li>
                Four options will be given for each question, among which only
                one would be correct.
              </li>
              <li>
                You will be given 15 seconds for each question. In case you do
                not choose an option before the time runs out, you will be moved
                to the next question.
              </li>
            </ul>
          </div>
          <div className="modal__container --has-padding">
            <p className="modal__container-heading">Marking System</p>
            <ul>
              <li>You will be given points for each corrent answers only.</li>
              <li>
                Points given would be equal to the time remaining when you
                answer, in seconds. For example, 5 points would be alloted if
                you answer when 5 seconds are remaining.
              </li>
              <li>Wrong answers would have no effect on your score.</li>
            </ul>
          </div>
          <div className="modal__container --has-padding">
            <p className="modal__container-heading">Helper</p>
            <ul>
              <li>
                You will have a helper that you will able to use only once.
              </li>
              <li>
                Slice is the helper you will have. With this you will be able to
                mark out two incorrect options.
              </li>
              <li>
                Question answered with the help of Slice won't contribute to
                your score.
              </li>
            </ul>
          </div>
        </div>
        <div className="--verticle-flex --centered-flex --has-gap">
          <input
            className="username-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            defaultValue={userName}
          />
          <div className="--horizontal-flex --centered-flex --has-gap">
            <button
              className="btn --primary-btn --has-hover-overlay"
              value="start"
              onClick={(e) => modalButtonsHandler(e)}
            >
              Start Quiz
            </button>
            <button
              className="btn modal-close-btn --secondary-btn"
              value="back"
              onClick={(e) => modalButtonsHandler(e)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <div className="body-overlay-for-modal"></div>
    </>
  );
}
