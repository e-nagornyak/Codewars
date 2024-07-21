import { describe, expect, test } from "@jest/globals";

/**
 *
 * @description
   You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive
   strings taken in the array.
 */

function longestConsec(strarr, k) {
  const arrayL = strarr.length;
  if (!arrayL || k > arrayL || k <= 0) return "";

  let longestString = "";
  let maxLength = 0;

  for (let i = 0; i <= arrayL - k; i++) {
    let currentString = strarr.slice(i, i + k).join("");
    if (currentString.length > maxLength) {
      maxLength = currentString.length;
      longestString = currentString;
    }
  }

  return longestString;
}

describe("", () => {
  test("Basic tests", () => {
    expect(longestConsec([], 3)).toBe("")
    expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)).toBe("")
    expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toBe("")
    expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toBe("")
    //
    expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toBe("abigailtheta")
    // expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toBe("oocccffuucccjjjkkkjyyyeehh")
    // expect(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)).toBe("wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    // expect(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)).toBe("wlwsasphmxxowiaxujylentrklctozmymu")
    // expect(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toBe("ixoyx3452zzzzzzzzzzzz")

  });
});

