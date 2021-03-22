import PhraseGen from "./generators/PhraseGenerator";
import EngPhraseGen from "./generators/EnglishPhraseGenerator";
import React, { useState, useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function App() {
  const phraseGen = new PhraseGen();
  const engPhGen = new EngPhraseGen();
  const [wordsNumber, setWordsNumber] = useState<number>(1);
  const [phrase, setPhrase] = useState<string>();
  const [selectedOption, setSelectedOption] = useState<string>("words");
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let wholePhrase: string = "";
    if (selectedOption === "words") {
      wholePhrase = engPhGen.getEngSentence(wordsNumber);
    }
    if (selectedOption === "dummy") {
      wholePhrase = phraseGen.getPhrase(wordsNumber);
    }

    setPhrase(wholePhrase);
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <div className="container">
        <section>
          <h1>Text generator</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="wordLength">How many words to generate?: </label>
              <input
                type="number"
                name="wordLength"
                id="wordLength"
                value={wordsNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let num = parseInt(e.target.value);
                  if (isNaN(num)) {
                    setWordsNumber(1);
                    return;
                  }
                  setWordsNumber(num);
                }}
              />
              {wordsNumber >= 30001 && (
                <p className="message">
                  It will take a while to generate {wordsNumber} words
                </p>
              )}{" "}
            </div>
            <div className="radioBtn form-item">
              <span>
                <input
                  name="tab"
                  type="radio"
                  value="words"
                  checked={selectedOption === "words"}
                  onChange={onValueChange}
                />
                <span>{"   "}</span>
                words
              </span>
              <span>
                <input
                  name="tab"
                  type="radio"
                  value="dummy"
                  checked={selectedOption === "dummy"}
                  onChange={onValueChange}
                />
                <span>{"   "}</span>
                dummy text
              </span>
            </div>

            <button className="btn form-item" type="submit">
              generate
            </button>
          </form>

          {!!phrase && (
            <article>
              <CopyToClipboard text={phrase}>
                <button
                  className={`btn-copy ${isCopied ? "activeCopy" : ""}`}
                  onClick={handleCopyClick}
                >
                  {isCopied ? "Copied!" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
              <textarea
                id="phrase"
                name="phrase"
                rows={8}
                cols={50}
                value={phrase}
                disabled
              ></textarea>
            </article>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
