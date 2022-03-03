import { createContext } from "react";

export const QuestionsContext = createContext();

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
    {
      question: "What is Pepper Potts allergic to?",
      questionCode: "mcu7",
      options: {
        Pepper: false,
        Chocolate: false,
        Strawberries: true,
        Nuts: false,
      },
    },
    {
      question: "What country is Wanda Maximoff from?",
      questionCode: "mcu8",
      options: {
        Sokovia: true,
        Wakanda: false,
        Latveria: false,
        Unknown: false,
      },
    },
    {
      question: "Which place do Hawkeye and Black Widow often reminisce about?",
      questionCode: "mcu9",
      options: {
        Budapest: true,
        Sokovia: false,
        Atlantis: false,
        Queens: false,
      },
    },
    {
      question: "What is the only MCU movie to not have a post credit scene?",
      questionCode: "mcu10",
      options: {
        "Avengers: Infinity War": false,
        "Captain America: Civil War": false,
        "Thor: Ragnarok": false,
        "Avengers: Endgame": true,
      },
    },
  ],
  hp: [
    {
      question:
        "What was Lilly Potter's lastname before she married James Potter?",
      questionCode: "hp1",
      options: { Smith: false, Jonas: false, Hans: false, Evans: true },
    },
    {
      question: "What does the Imperius Curse do?",
      questionCode: "hp2",
      options: {
        Tortures: true,
        Controls: false,
        Kills: false,
        Transmutes: false,
      },
    },
    {
      question: "How much points did the golden snitch carry?",
      questionCode: "hp3",
      options: {
        100: false,
        500: false,
        150: true,
        50: false,
      },
    },
    {
      question: "What is Harry's patronus?",
      questionCode: "hp4",
      options: {
        Owl: false,
        Unicorn: false,
        Griffin: false,
        Stag: true,
      },
    },
    {
      question: "What dragon did Harry face during the Triwizard Tournament?",
      questionCode: "hp5",
      options: {
        "Hungarian Horntail": true,
        "Welsh Green": false,
        "Chinese Fireball": false,
        "Swedish Short-Snout": false,
      },
    },
    {
      question:
        "Apart from Harry, who else could have been the child from prophecy?",
      questionCode: "hp6",
      options: {
        "Luna Lovegood": false,
        "Neville Longbottom": true,
        "Hermione Granger": false,
        "Cedric Diggory": false,
      },
    },
    {
      question: "Who was the Half Blood Prince?",
      questionCode: "hp7",
      options: {
        "Severus Snape": true,
        "Lucius Malfoy": false,
        "Tom Riddle": false,
        "Sirius Black": false,
      },
    },
    {
      question: "Who did Gellert Grindelwald steal the elder wand from?",
      questionCode: "hp8",
      options: {
        "Garrick Ollivander": false,
        "Mykew Gregorovitch": true,
        "Antioch Peverell": false,
        "Tom Riddle": false,
      },
    },
    {
      question: "Who led Harry to the Sword of Gryffindor?",
      questionCode: "hp9",
      options: {
        "Sirius Black": false,
        "Albus Dumbledore": false,
        "Severus Snape": true,
        "Aurelius Dumbledore": false,
      },
    },
    {
      question: "How many horcruxes were there in total?",
      questionCode: "hp10",
      options: {
        7: false,
        9: false,
        6: false,
        8: true,
      },
    },
  ],
};

export function QuestionContextProvider({ children }) {
  return (
    <QuestionsContext.Provider value={allQuestions}>
      {children}
    </QuestionsContext.Provider>
  );
}
