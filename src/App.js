import "./CSS/variables.css";
import "./CSS/typography.css";
import "./CSS/utilities.css";
import "./CSS/generic.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import SinglePlayerHomepage from "./Components/SinglePlayerHomepage/SinglePlayerHomepage";
import Quiz from "./Components/Quiz/Quiz";
import Footer from "./Components/Footer/Footer";
import ResultPage from "./Components/ResultPage/ResultPage";

function App() {
  const [username, setUsername] = useState("Guest");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/single-player-mode/"
          element={<SinglePlayerHomepage usernameState={setUsername} />}
        />
        <Route
          path="/single-player-mode/in-quiz/:quizcode"
          element={<Quiz />}
        />
        <Route
          path="/single-player-mode/result"
          element={<ResultPage username={username} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
