"use client";

import React, { useState, useEffect } from "react";
import AnimationPage from "./activityCompleteAnimation";
import "./Card.css";

const Card = () => {
  // Phrases Data

  const phrases = [
    {
      text: "I am grateful",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "Today, I am the most grateful version of myself",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "TODAY, I am the most grateful version of myself",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "Today, I AM the most grateful version of myself",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "Today, I am THE MOST grateful version of myself",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "Today, I am the most GRATEFUL version of myself",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "I love my life",
      answer: 1,
      themeImage:
        " https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "I am happy",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-happiness.svg?alt=media&token=f42a0792-27a9-4bef-9da6-f02f4f879e8b",
    },
    {
      text: "I am not happy",
      answer: 0,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-happiness.svg?alt=media&token=f42a0792-27a9-4bef-9da6-f02f4f879e8b",
    },
    {
      text: "I never get what I want",
      answer: 0,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-gratitude.svg?alt=media&token=7ae70c73-355f-47fe-91ef-fce1e8393218",
    },
    {
      text: "I am sincere",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-sincerity.svg?alt=media&token=8f2d314a-ceda-40ee-89fa-a57e97ed5012",
    },
    {
      text: "I focus on what I really want",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-passion.svg?alt=media&token=88b7d00e-ba64-437e-847c-f37f1995cefb",
    },
    {
      text: "I don't know how to find motivation",
      answer: 0,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-passion.svg?alt=media&token=88b7d00e-ba64-437e-847c-f37f1995cefb",
    },

    {
      text: "I want to thrive!",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-passion.svg?alt=media&token=88b7d00e-ba64-437e-847c-f37f1995cefb",
    },
    {
      text: "I want to help people",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-sincerity.svg?alt=media&token=8f2d314a-ceda-40ee-89fa-a57e97ed5012",
    },
    {
      text: "I care about others",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-sincerity.svg?alt=media&token=8f2d314a-ceda-40ee-89fa-a57e97ed5012",
    },
    {
      text: "I am grumpy",
      answer: 0,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-happiness.svg?alt=media&token=f42a0792-27a9-4bef-9da6-f02f4f879e8b",
    },
    {
      text: "Everyone deserves respect & love",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-sincerity.svg?alt=media&token=8f2d314a-ceda-40ee-89fa-a57e97ed5012",
    },
    {
      text: "I aim to do what I love",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-passion.svg?alt=media&token=88b7d00e-ba64-437e-847c-f37f1995cefb",
    },
    {
      text: "I will do my best",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-courage.svg?alt=media&token=7c335f34-bf09-400b-b0eb-df110d664c8f",
    },
    {
      text: "I will keep going even when I do not succeed",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-courage.svg?alt=media&token=7c335f34-bf09-400b-b0eb-df110d664c8f",
    },
    {
      text: "I want to know how you feel",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-understanding.svg?alt=media&token=c0d26d05-212d-4b39-9593-1de7eb011377",
    },
    {
      text: "I listen even if I don't agree",
      answer: 1,
      themeImage:
        "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_themes%2Ftheme-11aff-understanding.svg?alt=media&token=c0d26d05-212d-4b39-9593-1de7eb011377",
    },
  ];

  // State Variable Declared

  const [repeatedPhrases, setRepeatedPhrases] = useState([]);
  const [num, setNum] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [points, setPoints] = useState(0);

  // Timer Constants
  const [mins, setMins] = useState(4);
  const [seconds, setSeconds] = useState(0);
  const [finalResult, setFinalResult] = useState(false);

  // EDITED 29 - 31 December 2022 Kamran ( Users Array and Current User)
  const [users, setUsers] = useState(["Dom", "Mic", "John", "Nick", "Daniel"]);
  const [currentUser, setCurrentUser] = useState("Jack");
  const [bonusPoints, setBonusPoints] = useState(0);

  // Images
  const correctImg =
    "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_actions%2Fimages_actions_global%2Fimage-correct.webp?alt=media&token=14d68897-d349-4921-a286-2246362f3e00";
  const incorrectImg =
    "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_actions%2Fimages_actions_global%2Fimage-incorrect.webp?alt=media&token=01353005-f9b2-4999-91ed-25c3a019a810";

  // Sounds
  const correctSound =
    "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/sounds%2Fsounds_actions%2Fcorrect-action.m4a?alt=media&token=9690f66f-916e-48c0-a94c-813cab94691a";
  const incorrectSound =
    "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/sounds%2Fsounds_actions%2Fincorrect-action.m4a?alt=media&token=e2bd36ac-0967-41dc-b959-0359471e575c";

  // Timer Function

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (mins === 0 && seconds === -1) {
      clearTimeout(timeoutID);
      setFinalResult(true);
    } else if (seconds === -1) {
      setSeconds(59);
      setMins(mins - 1);
    }
  });

  // Random Data Occurring Function

  function newRandomNumber() {
    const newNum = Math.floor(Math.random() * phrases.length);
    setNum(newNum);
  }
  useEffect(() => {
    newRandomNumber();
  }, []);

  // Sound Play Functions

  const incorrectPlay = () => {
    new Audio(incorrectSound).play();
  };
  const correctPlay = () => {
    new Audio(correctSound).play();
  };

  // Answer Function
  const validateAnswer = (thePhrase, TheCorrectNum, ButtonBehaviour) => {
    // EDITED 29 December 2022 Kamran ("Function Conditions For Accuracy and Wrong 12/29/2022" part is removed from here and added below in useEffect Hook )

    if (
      thePhrase === phrases[num].text &&
      TheCorrectNum === 1 &&
      ButtonBehaviour === 1
    ) {
      setPoints(points + 1);
      setActive(true);
      correctPlay();
      setTimeout(() => {
        setActive(false);
      }, 2000);
    } else if (
      thePhrase === phrases[num].text &&
      TheCorrectNum === 0 &&
      ButtonBehaviour === 1
    ) {
      setIncorrectAnswer(incorrectAnswer + 1);
      // Updated Here
      setPoints(points + 1);
      correctPlay();
      //
      setActive2(true);
      setTimeout(() => {
        newRandomNumber();
      }, 1000);

      setTimeout(() => {
        setActive2(false);
      }, 2000);
    } else if (
      thePhrase === phrases[num].text &&
      TheCorrectNum === 0 &&
      ButtonBehaviour === 0
    ) {
      setPoints(points + 1);
      setActive(true);
      correctPlay();
      setTimeout(() => {
        setActive(false);
      }, 2000);
    } else if (
      thePhrase === phrases[num].text &&
      TheCorrectNum === 1 &&
      ButtonBehaviour === 0
    ) {
      setIncorrectAnswer(incorrectAnswer + 1);
      setActive2(true);
      // Updated Here
      setPoints(points + 1);
      correctPlay();
      //
      setTimeout(() => {
        newRandomNumber();
      }, 1000);

      setTimeout(() => {
        setActive2(false);
      }, 2000);
    }

    {
      phrases
        .filter((phrase) => phrase.text.includes(phrases[num].text))
        .map((filteredPhase) =>
          setRepeatedPhrases((repeated) => [...repeated, filteredPhase])
        );
    }

    setTimeout(() => {
      newRandomNumber();
    }, 1000);
  };
  // EDITED 29 December 2022 Kamran (UseEffect Hook -> Deleted Part Updated Here)

  useEffect(() => {
    if (incorrectAnswer === 0 && points === 0) {
      setAccuracy(0 * 100);
    } else {
      let accuracyDecimal = (
        (points / (incorrectAnswer + points)) *
        100
      ).toFixed(2);
      setAccuracy(accuracyDecimal);
    }
  }, [incorrectAnswer, points]);

  // EDITED 29 - 31 December 2022 Kamran ( Bonus Function)

  useEffect(() => {
    // Convert The array and current user into lower case

    const lowerArray = users.map((element) => {
      return element.toLowerCase();
    });
    setCurrentUser(currentUser.toLocaleLowerCase());

    if (lowerArray.includes(currentUser.toLocaleLowerCase())) {
      setPoints(points + 2);
      setBonusPoints(2);
    } else if (!lowerArray.includes(currentUser.toLocaleLowerCase())) {
      setBonusPoints(11);
      setPoints(points + 11);
    }
    console.log("Users", users);
    console.log("Current User", currentUser);
  }, []);

  return (
    <>
      {finalResult ? (
        // Showing Final Result Component
        <>
          <AnimationPage
            points={points}
            accuracy={accuracy}
            bonus={bonusPoints}
          />
        </>
      ) : (
        // Main Phrase Component
        <>
          <div>
            <div className="points">
              <div>
                {mins} : {seconds < 10 ? "0" + seconds : seconds}
              </div>
              <span> ambients: {points}</span>
            </div>
            <div className="card_done_container">
              <div className={active ? "active done" : "inactive done"}>
                {active ? (
                  <img width="50px" src={correctImg} alt="correct" />
                ) : (
                  <></>
                )}
              </div>
              <div className={active2 ? "active done" : "inactive done"}>
                {active2 ? (
                  <img width="50px" src={incorrectImg} alt="incorrect" />
                ) : (
                  <></>
                )}
              </div>
              <div
                className={
                  active2 || active
                    ? "card-container activeCard"
                    : "card-container inactiveCard"
                }
              >
                {/* Added Theme Image Container */}
                <div className="card_wrapper">
                  <div className="theme_image">
                    <img src={phrases[num].themeImage} alt="theme_image" />
                  </div>
                  <p className="phrase">{phrases[num].text}</p>
                </div>
              </div>
            </div>
            <div className="buttons">
              {/* Onclick Function is Updated */}

              <div
                className="incorrect"
                onClick={
                  active2
                    ? null
                    : () =>
                        validateAnswer(
                          phrases[num].text,
                          phrases[num].answer,
                          0
                        )
                }
              >
                <div className="circle-btn">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_actions%2Fimages_actions_global%2Ftrash-open-partial.svg?alt=media&token=c4fb11e5-2979-4a9f-8360-d83bbd7bf1ab" />
                </div>
              </div>
              <p className="or">or</p>
              {/* Onclick Function is Updated */}
              <div
                className="correct"
                onClick={
                  active
                    ? null
                    : () =>
                        validateAnswer(
                          phrases[num].text,
                          phrases[num].answer,
                          1
                        )
                }
              >
                <div className="circle-btn">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_actions%2Fimages_actions_global%2Fheart-open-partial.svg?alt=media&token=643553da-7524-41be-b002-5f9d5164d1b9" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
