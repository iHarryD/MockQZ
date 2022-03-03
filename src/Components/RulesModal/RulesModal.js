import "./CSS/style.css";

import { useNavigate } from "react-router-dom";
import ReactDom from "react-dom";

export default function RulesModal(props) {
  const navigate = useNavigate();

  return ReactDom.createPortal(
    <>
      <div className="modal --verticle-flex --has-gap --has-padding">
        <div className="modal-header --horizontal-flex">
          <h3 className="sub-heading --h3 --has-padding">
            You have selected{" "}
            <span className="quiz-selected-name">{props.quizName}</span> quiz,
            but before getting started, let's get you started with the rules and
            everything.
          </h3>
        </div>
        <div className="modal-main --verticle-flex --has-gap --has-padding">
          <div className="modal__container">
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
          <div className="modal__container">
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
          <div className="modal__container">
            <p className="modal__container-heading">Helper</p>
            <ul>
              <li>
                You will have a helper that you will able to use only once.
              </li>
              <li>
                Slice is the helper you will have. With this you will be able to
                mark out two incorrect options.
              </li>
            </ul>
          </div>
        </div>
        <div className="--verticle-flex --centered-flex">
          <div className="--verticle-flex --has-gap">
            <div className="username-input-container">
              <input
                className="username-input"
                type="text"
                name="name"
                placeholder={"Guest"}
                onChange={(e) => {
                  props.usernameState((prev) =>
                    e.target.value ? e.target.value : prev
                  );
                }}
              />
            </div>
            <div className="--horizontal-flex --centered-flex --has-gap">
              <button
                className="btn --primary-btn --has-hover-overlay"
                onClick={() => {
                  navigate(`in-quiz/${props.userSelectedQuizCode}`, {
                    state: {
                      quizName: props.quizName,
                    },
                  });
                  props.modalState(false);
                }}
              >
                Start Quiz
              </button>

              <button
                className="btn modal-close-btn --secondary-btn"
                onClick={() => {
                  props.modalState(false);
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay-for-modal"></div>
    </>,
    document.getElementById("portal")
  );
}
