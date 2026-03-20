// src/text-to-lines/text-to-lines.helper.ts
var sentenceRegex = /.*?(?:\.\.\.|[.?!…。？！])/gu;
var TextToLines = class {
  /** Internal array of sentences */
  linesArr = [];
  /**
   * Initialize the instance with a string or array of strings.
   * @param base - Initial text input
   */
  constructor(base) {
    this.linesArr.push(...this.normalize(base));
  }
  /**
   * Number of sentences currently accumulated
   * @readonly
   */
  get lines() {
    return this.linesArr.length;
  }
  /**
   * Append more text or array of strings to the current sentences.
   * Chainable method.
   * @param val - String or array of strings to append
   * @returns The same `TextToLines` instance for chaining
   */
  append(val) {
    this.linesArr.push(...this.normalize(val));
    return this;
  }
  /**
   * Return all accumulated sentences as an array of strings. \
   * Throws an error if no sentences exist.
   * @returns Array of sentences
   * @throws {Error} If no valid sentences exist
   */
  build() {
    if (!this.linesArr.length) throw new Error("Converting text to lines");
    return this.linesArr;
  }
  normalize(val) {
    return Array.isArray(val) ? val.flatMap((t) => this.splitSentences(t)) : this.splitSentences(val);
  }
  splitSentences(text) {
    const matches = text.match(sentenceRegex);
    if (matches) return matches.map((s) => s.trim()).filter(Boolean);
    return text.trim() ? [text.trim()] : [];
  }
};

export { TextToLines };
