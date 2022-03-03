import "./CSS/style.css";
import MCUThumbnail from "../../Assets/card-thumbnail-mcu.jpg";
import HPThumbnail from "../../Assets/card-thumbnail-hp.jpg";
import DCEUThumbnail from "../../Assets/card-thumbnail-dceu.jpg";
import MUThumbnail from "../../Assets/card-thumbnail-mu.jpg";
import AOTThumbnail from "../../Assets/card-thumbnail-aot.jpeg";
import DiceThumbnail from "../../Assets/card-thumbnail-dice.png";
import RulesModal from "../RulesModal/RulesModal";

import { useState, useRef } from "react";

export default function SinglePlayerHomepage(props) {
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const userSelection = useRef(null);
  const userSelectedQuizName = useRef(null);

  const quizClickHandler = (e) => {
    userSelectedQuizName.current = e.target.dataset.quizname;
    userSelection.current = e.target.value;
    setHasUserSelected(true);
  };

  return (
    <>
      {hasUserSelected && (
        <RulesModal
          usernameState={props.usernameState}
          quizName={userSelectedQuizName.current}
          userSelectedQuizCode={userSelection.current}
          modalState={setHasUserSelected}
        />
      )}
      <main className="single-player-homepage">
        <h3 className="sub-heading --h2">Select the quiz</h3>
        <section className="section quiz-selection-section --has-gap --has-padding">
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={MCUThumbnail}
                alt="marvel-cinematic-universe"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">
                Marvel Cinematic Universe
              </p>
              <p className="quiz-card-description">
                Everyone is a MCU fan, we all love it but how well do you know
                it? Take the quiz to find out.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="mcu"
                onClick={(e) => quizClickHandler(e)}
                data-quizname="Marvel Cinematic Universe"
              >
                Take Quiz
              </button>
            </div>
          </div>
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={HPThumbnail}
                alt="harry-potter"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">Harry Potter</p>
              <p className="quiz-card-description">
                Hogwards was the Harvard of our childhood. Take the quiz to find
                out how big of a Potterhead are you.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="hp"
                onClick={(e) => quizClickHandler(e)}
                data-quizname="Harry Potter"
              >
                Take Quiz
              </button>
            </div>
          </div>
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={DCEUThumbnail}
                alt="dc-extended-universe"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">
                DC Extended Universe
              </p>
              <p className="quiz-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                eius iste nam odit praesentium libero.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="dceu"
                onClick={(e) => quizClickHandler(e)}
                data-quizname="DC Extended Universe"
              >
                Take Quiz
              </button>
            </div>
          </div>
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={MUThumbnail}
                alt="marvel-comic"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">Marvel Comics</p>
              <p className="quiz-card-description">
                This quiz is for those who know the source material for all
                those Marvel movies that everyone loves.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="mc"
                onClick={(e) => quizClickHandler(e)}
                data-quizname="Marvel Universe"
              >
                Take Quiz
              </button>
            </div>
          </div>
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={AOTThumbnail}
                alt="attack-on-titan"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">Attack on Titan</p>
              <p className="quiz-card-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt libero quisquam error.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="aot"
                onClick={(e) => quizClickHandler(e)}
                data-quizname="Attack of Titan"
              >
                Take Quiz
              </button>
            </div>
          </div>
          <div className="quiz-card --homepage --verticle-flex">
            <div className="quiz-card-thumbnail-container">
              <img
                className="quiz-card-thumbnail-img"
                src={DiceThumbnail}
                alt="dice"
              />
            </div>
            <div className="quiz-card-text-container --verticle-flex --has-gap --has-padding">
              <p className="quiz-card-heading --bold-600">Roll a dice</p>
              <p className="quiz-card-description">
                If you want to take a random quiz. Roll the dice.
              </p>
            </div>
            <div className="quiz-card-overlay --verticle-flex --centered-flex">
              <button
                className="btn --secondary-btn"
                value="roll"
                onClick={(e) => quizClickHandler(e)}
              >
                Take Quiz
              </button>
            </div>
          </div>
        </section>
        <p className="text-at-bottom --bold-600">
          This is it for now. More quizes will be added soon. Keep coming back.
        </p>
      </main>
    </>
  );
}
