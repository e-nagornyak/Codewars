import { describe, expect, test } from "@jest/globals";

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}

describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1,2,4])
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4,3,2,2])
    expect(plusOne([9])).toStrictEqual([1,0])
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toStrictEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5, 5,4,4 ])
  });
});
