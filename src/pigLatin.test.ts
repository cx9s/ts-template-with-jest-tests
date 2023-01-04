import { pigLatin } from "../src/pigLatin";
describe("test changing a input string into pigLatin string", () => {
  it("output a empty string for empty string", () => {
    expect(pigLatin("")).toBe("");
  });
  it("output pigLatin string for input string", () => {
    expect(pigLatin("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  it("output pigLatin string for a input string with punctuation marks", () => {
    expect(pigLatin("Hello world !")).toBe("elloHay orldway !");
  });
});
