import { describe, expect, test } from '@jest/globals';

async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  return Promise.all([promise1, promise2]).then(res => res.reduce((a, c) => a + c));
}

// Test cases
describe("Solution", () => {
  test("addTwoPromises", async () => {
    await expect(addTwoPromises(Promise.resolve(2), Promise.resolve(2))).resolves.toBe(4);
  });
});
