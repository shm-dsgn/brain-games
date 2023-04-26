import axios from "axios";
import { useEffect, useState } from "react";
import "./Memory.css";

const Memory = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display, setDisplay] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [accDisplay, setAccDisplay] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://random-word-api.vercel.app/api",
      params: { words: "20" },
    };

    axios
      .request(options)
      .then(function (response) {
        setWords(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const displayWords = () => {
    setDisplay(true);
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, 900);
    return () => clearInterval(interval);
  };

  const Accuracy = () => {
    setAccDisplay(false);
    let acc = 0;
    words.forEach((element) => {
      if (userInput !== null && userInput.includes(element)) {
        acc = acc + 1;
      }
    });
    setAccuracy(acc);
  };

  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <div className="memory-block">
      <h1>Memory Test</h1>
      <p id="description">
        In this test, you will see about twenty words, each for a short amount
        of time. Try to memorize as many as you can. Order and case don't
        matter. Separate words by space or newlines.
      </p>

      <div>
        {display && currentIndex < words.length && (
          <div>
            <p className="word-display">{words[currentIndex]}</p>
          </div>
        )}
      </div>
      {currentIndex < words.length && (
        <button onClick={displayWords} className="memory-btn">
          {display && currentIndex < words.length ? "Running" : "Start"}
        </button>
      )}

      {currentIndex >= words.length && (
        <div className="check-block">
          <textarea
            onChange={(e) => setUserInput(e.target.value)}
            columns="40"
            rows="10"
            id="userinput"
            placeholder="Write down as many words as you remember. Order and case don't matter. Separate words by space or newlines."
          ></textarea>
          {accDisplay && (
            <button className="memory-btn" onClick={Accuracy}>
              Show Accuracy
            </button>
          )}

          {!accDisplay && <h2>Your accuracy is {accuracy} out of 20</h2>}
          <button className="memory-btn" onClick={refresh}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Memory;
