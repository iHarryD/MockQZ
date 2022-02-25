import { createContext } from "react";

export const QuestionsContext = createContext();

export function QuestionsState(props) {
  const allQuestions = {
    mcu: [
      {
        question: "Who was the gatekeeper at the Void?",
        questionCode: "mcu1",
        options: { Azak: false, Arigoth: false, Alioth: true, Aziroth: false },
      },
      {
        question: "Which was the first Infinity Stone to appear in the MCU?",
        questionCode: "mcu2",
        options: {
          "Time Stone": false,
          "Space Stone": true,
          "Reality Stone": false,
          "Power Stone": false,
        },
      },
      {
        question: "Who did Wong fight in the arena, in Shang Chi?",
        questionCode: "mcu3",
        options: {
          Mandarine: false,
          "Ten Ring": false,
          "Shang Chi": false,
          Abomination: true,
        },
      },
      {
        question: "Where did Asgardians belive the deads to go?",
        questionCode: "mcu4",
        options: {
          Valhalla: true,
          Jotunheim: false,
          Muspelheim: false,
          Hel: false,
        },
      },
      {
        question:
          "What did Tony Stark hack in high school over a bet by his friends?",
        questionCode: "mcu5",
        options: { NASA: false, Pentagon: true, SHIELD: false, AIIMS: false },
      },
      {
        question:
          "Who was the first Avenger to be bitten by a zombie in What If?",
        questionCode: "mcu6",
        options: {
          Ironman: false,
          Hawkeye: false,
          Antman: false,
          "Captain America": true,
        },
      },
    ],
  };

  return (
    <QuestionsContext.Provider value={allQuestions}>
      {props.children}
    </QuestionsContext.Provider>
  );
}
