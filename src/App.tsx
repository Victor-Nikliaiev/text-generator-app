import React from "react";
import PhraseGen from "./generators/PhraseGenerator";
function App() {
  const phrase = new PhraseGen(100);
  console.log(phrase.phrase);
  return (
    <>
      <div>Lorem ipsum</div>
    </>
  );
}

export default App;
