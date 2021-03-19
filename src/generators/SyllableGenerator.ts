class SyllableGenerator {
  constructor() {}

  private _generate_abc(): string[] {
    const alfa: number[] = Array.from(Array(26)).map((e, i) => i + 97);
    const alfabet: string[] = alfa.map((x) => String.fromCharCode(x));
    return alfabet;
  }

  private _generate_syls(abc: string[]): string[] {
    let syls: string[] = [];
    abc.forEach((ch) => {
      abc.forEach((ch2) => {
        if (ch !== ch2) {
          syls = [...syls, ch + ch2];
        }
      });
    });
    return syls;
  }

  protected get syllables(): string[] {
    const abc = this._generate_abc();
    const syls = this._generate_syls(abc);
    return syls;
  }
}

export default SyllableGenerator;
