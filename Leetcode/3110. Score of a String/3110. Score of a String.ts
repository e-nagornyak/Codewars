import { describe, expect, test } from "@jest/globals";

function scoreOfString(s: string): number {
  const array = s?.split('')?.map(el => el?.charCodeAt(0))
  let res = 0

  for (let i = 0; i < array?.length -1; i++) {
    res = res + Math.abs(array?.[i] - array?.[i + 1])
  }

  return res
}

describe("Split Strings", () => {
  test("Basic tests", () => {
    expect(scoreOfString("hello")).toBe(13);
  });
});



