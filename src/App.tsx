import PhraseGen from "./generators/PhraseGenerator";
import React, { useState } from "react";
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
        <h1>Phrase Generator</h1>
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
      <p>{phrase}</p>
    </>
  );
}

export default App;
