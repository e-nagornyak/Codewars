import { describe, expect, test } from '@jest/globals';
import { argumentsLength } from "./2703. Return Length of Arguments Passed";


describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(argumentsLength([5])).toBe(1);
    expect(argumentsLength([{},null,"3"])).toBe(3);
  });
});

