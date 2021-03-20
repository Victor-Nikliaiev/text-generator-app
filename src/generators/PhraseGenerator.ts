import WordGen from "./WordGenerator";

class PhraseGenerator extends WordGen {
  private _generatePhrase(wordsNumber: number): string {
    let phrases: string[] = [];
    phrases = Array.from({ length: wordsNumber }, () => this.randomWord);
    return phrases.join(" ");
  }

  getPhrase(wordsNumber: number): string {
    if (wordsNumber <= 0) {
      wordsNumber = 1;
    }
    const phrase = this._generatePhrase(wordsNumber);
    return phrase;
  }
}

export default PhraseGenerator;
