import { describe, expect, test } from '@jest/globals';

function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  const charMap = {};

  for (let start = 0, end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }
    charMap[currentChar] = end;
    length = Math.max(length, end - start + 1);
  }

  return length;
}


describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    // expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
});

