import { describe, expect, test } from "@jest/globals";

function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const keypad: { [key: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  const result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path.join(''));
      return;
    }

    const letters = keypad[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);
      backtrack(index + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}


describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(letterCombinations("23")).toBe(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(letterCombinations("")).toBe([]);
    expect(letterCombinations("2")).toBe(["a", "b", "c"]);
  });
});
