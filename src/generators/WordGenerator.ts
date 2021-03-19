import SylsGen from "./SyllableGenerator";

class WordGenerator extends SylsGen {
  private _sylbs: string[];
  constructor() {
    super();
    this._sylbs = this.syllables;
  }

  private _generateWordLength(): number {
    let wordLength = Math.floor(Math.random() * 10);
    if (!wordLength) wordLength = 1;
    return wordLength;
  }

  private _generateRandIndexes(
    wordLength: number,
    sylbArrLength: number
  ): number[] {
    let indexes: number[] = [];
    // doing random index with max exclusive
    // (To get correct index: lastIndex= length-1)
    for (let i = 0; i < wordLength; i++) {
      let randIndex = Math.floor(Math.random() * sylbArrLength);
      if (randIndex === indexes[indexes.length - 1]) {
        randIndex += 1;
      }
      indexes = [...indexes, randIndex];
    }
    return indexes;
  }

  private _generateWord(randIndexes: number[], sylbs: string[]): string {
    let wordArray = randIndexes.map((index) => sylbs[index]);
    let word = wordArray.join("");
    return word;
  }

  protected get randomWord(): string {
    let wordLength = this._generateWordLength();
    let randIndexes = this._generateRandIndexes(wordLength, this._sylbs.length);
    return this._generateWord(randIndexes, this._sylbs);
  }
}

export default WordGenerator;
