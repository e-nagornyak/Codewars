import {describe, expect, test} from '@jest/globals';
import {titleCase} from './test';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(titleCase("bla", "bla")).toBe(3);
    });
});
