import { describe, expect, test } from "@jest/globals";

function defangIPaddr(address: string): string {
  return address?.replace(/\./g, '[.]')
};

// Test cases
describe("Solution", () => {
  test("lengthOfLongestSubstring", () => {
    expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
    expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
  });
});
