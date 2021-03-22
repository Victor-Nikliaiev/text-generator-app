import wordsArray from "./wordsData";
import WordGen from "./WordGenerator";

class EnglishPhraseGenerator extends WordGen {
  private _generatePhrase(indexes: number[], wordsArray: string[]): string {
    let phrases: string[] = [];
    phrases = indexes.map((i) => wordsArray[i]);
    return phrases.join(" ");
  }

  getEngSentence(wordsNumber: number): string {
    const indexes = this._generateRandIndexes(wordsNumber, wordsArray.length);
    const sentence = this._generatePhrase(indexes, wordsArray);
    return sentence;
  }
}

export default EnglishPhraseGenerator;
