import "./CSS/style.css";

export default function ResultPage() {
  return (
    <main className="main --result-page --verticle-flex">
      <div className="result-page-header --has-padding">
        <h2 className="sub-heading --h2">
          <span>Marvel Cinematic Universe</span> Quiz Ends
        </h2>
      </div>
      <section className="result-section --verticle-flex --centered-flex --has-padding">
        <p className="to-user-message">
          Kuddos, <span className="name-span --bold-700">Harry</span>.
        </p>
        <p className="score-message">
          Your final score is{" "}
          <span className="total-score-span --bold-700">33</span>.
        </p>
      </section>
      <div className="result-page-footer --has-padding">
        <p className="footer-message --bold-600">
          If you want me to add you on the scoreboard, send me screenshot of
          this page.
        </p>
        <div className="--horizontal-flex --centered-flex --has-gap">
          <button className="btn --primary-btn --has-hover-overlay">
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
