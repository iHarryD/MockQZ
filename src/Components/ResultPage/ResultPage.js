import "./CSS/style.css";

import { useNavigate, useLocation } from "react-router-dom";

export default function ResultPage(props) {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <main className="main --result-page --verticle-flex">
      <div className="result-page-header --has-padding">
        <h2 className="sub-heading --h2">
          <span>{location.state.quizName}</span> Quiz Ends
        </h2>
      </div>
      <section className="result-section --verticle-flex --centered-flex --has-padding">
        <p className="to-user-message">
          Kuddos, <span className="name-span --bold-700">{props.username}</span>
          .
        </p>
        <p className="score-message">
          Your final score is{" "}
          <span className="total-score-span --bold-700">
            {location.state.finalScore}
          </span>
          .
        </p>
      </section>
      <div className="result-page-footer --has-padding">
        <p className="footer-message --bold-600">
          If you want me to add you on the scoreboard, send me screenshot of
          this page.
        </p>
        <div className="--horizontal-flex --centered-flex --has-gap">
          <button
            className="btn --primary-btn --has-hover-overlay"
            onClick={() => {
              navigation("/");
            }}
          >
            Go back to home
          </button>
          <button className="btn --primary-btn --has-hover-overlay">
            Check scoreboard
          </button>
        </div>
      </div>
    </main>
  );
}
