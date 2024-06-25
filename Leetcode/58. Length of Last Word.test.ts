import { describe, expect, test } from "@jest/globals";

function lengthOfLastWord(s: string): number {
  return s?.trim()?.split(' ')?.at(-1)?.length
}

describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    // expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
});
