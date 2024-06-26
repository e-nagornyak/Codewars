import { describe, expect, test } from "@jest/globals";
import { searchInsert } from "./35. Search Insert Position";

describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsert([3, 5, 6], 1)).toBe(0);
    // expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
});
