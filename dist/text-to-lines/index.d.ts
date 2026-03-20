type Input = string | string[];
declare class TextToLines {
    private linesArr;
    constructor(base: Input);
    get lines(): number;
    append(val: Input): this;
    build(): string[];
    private normalize;
    private splitSentences;
}

export { TextToLines };
