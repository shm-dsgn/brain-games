import { useState, useEffect } from "react";
import axios from "axios";
import "./Scramble.css";
import GetDef from "./GetDef";

const Scramble = () => {
  const [words, setWords] = useState([]);
  const [shuffleStr, setShuffle] = useState([]);
  const [display, setDisplay] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [accDisplay, setAccDisplay] = useState(true);
  const [accuracy, setAccuracy] = useState(0);
  const [startScramble, setStartScramble] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://random-word-api.vercel.app/api",
      params: { words: "3" },
    };

    axios
      .request(options)
      .then(function (response) {
        setWords(response.data);
        //add dctionary here
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const Accuracy = () => {
    setAccDisplay(false);
    let acc = 0;
    words.forEach((element) => {
      if (userInput !== null && userInput.toLowerCase().includes(element)) {
        acc = acc + 1;
      }
    });
    setAccuracy(acc);
  };

  const refresh = () => {
    window.location.reload(true);
  };

  const scramble = () => {
    let wordsCopy = [...words];
    for (let i = 0; i < wordsCopy.length; i++) {
      let word = wordsCopy[i];
      let shuffledWord = word
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join(" ")
        .toUpperCase();
      wordsCopy[i] = shuffledWord;
    }
    setStartScramble(true);
    setShuffle(wordsCopy);
    setDisplay(true);
  };

  //console.log(words);

  return (
    <div className="scramble-block">
      <h1>2. Scramble</h1>
      <p id="description">You will get 3 words to solve. Unscramble the words as fast as you can!!</p>

      {display && (
        <div className="words-def">
          {shuffleStr.map((word, i) => (
            <div key={i}>
              <h3>{word}</h3>
              <GetDef defWord={words[i]} />
            </div>
          ))}
        </div>
      )}
      {!startScramble && (
        <button onClick={scramble} className="scramble-btn">
          Start scramble
        </button>
      )}
      {startScramble && (
        <div>
          <textarea
            id="userinput"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Correctly write down the unscrambled words here. Order or case doesn't matter. Click on the 'Show Accuracy' button below to check your accuracy."
          ></textarea>

          <div className="scr-check-block">
            {accDisplay && (
              <button onClick={Accuracy} className="scramble-btn">
                Show Answers & Accuracy
              </button>
            )}

            {!accDisplay && (
              <div>
                <h2>Your accuracy is {accuracy} out of 3</h2>
                <p>
                  The correct words are:
                  {words.map((word, i) => (
                    <p key={i}>- {word.toUpperCase()} </p>
                  ))}
                </p>
              </div>
            )}
            <button onClick={refresh} className="scramble-btn">
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scramble;
