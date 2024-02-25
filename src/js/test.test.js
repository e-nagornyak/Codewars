import {titleCase} from './test'

test('main test', () => {
    expect(titleCase('First a of in', 'an often into')).toBe("bla");
});
