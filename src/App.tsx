import PhraseGen from "./generators/PhraseGenerator";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function App() {
  const phraseGen = new PhraseGen();
  const [wordsNumber, setWordsNumber] = useState<number>(1);
  const [phrase, setPhrase] = useState<string>();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const wholePhrase = phraseGen.getPhrase(wordsNumber);
    setPhrase(wholePhrase);
  };

  return (
    <>
      <div>
        <h1>Dummy text generator</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">generate</button>
        </form>
      </div>

      {!!phrase && (
        <div>
          <CopyToClipboard text={phrase}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
          <textarea
            id="phrase"
            name="phrase"
            rows={8}
            cols={50}
            value={phrase}
            disabled
          ></textarea>
        </div>
      )}
    </>
  );
}

export default App;
