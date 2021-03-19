import WordGen from "./WordGenerator";

class PhraseGenerator extends WordGen {
  constructor(private _wordsNumber: number) {
    super();
    if (this._wordsNumber <= 0) {
      this._wordsNumber = 1;
    }
  }

  private _generatePhrase(wordsNumber: number): string {
    let phrases: string[] = [];
    phrases = [...Array(wordsNumber).keys()].map(() => this.randomWord);
    return phrases.join(" ");
  }

  get phrase(): string {
    const phrase = this._generatePhrase(this._wordsNumber);
    return phrase;
  }
}

export default PhraseGenerator;
