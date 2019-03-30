const { itemCounts, stringCharsToArray, sanitize } = require('../textalyze');

describe('itemCount', () => {
  test('returns a count of the strings in the array', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = new Map([['one', 2], ['two', 2], ['three', 1], ['ZZZZ', 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('returns an empty hash when array is empty', () => {
    const input = [];
    const expectedOutput = new Map();

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('counts multiple words', () => {
    const input = ['hi', 'hi', 'hi'];
    const expectedOutput = new Map([['hi', 3]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('handles non-string inputs', () => {
    const input = ['null', null, '10', 10];
    const expectedOutput = new Map([['null', 1], [null, 1], ['10', 1], [10, 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('is case-sensitive', () => {
    const input = ['a', 'A', 'a', 'A'];
    const expectedOutput = new Map([['a', 2], ['A', 2]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });
});

describe('stringCharsToArray', () => {
  test('returns an Map of chars', () => {
    const input = 'car';
    const expectedOutput = new Map([['c', 1], ['a', 1], ['r', 1]]);

    expect(stringCharsToArray(input)).toEqual(expectedOutput);
  });


  test('returns an empty map when string is empty', () => {
    const input = '';
    const expectedOutput = new Map();

    expect(stringCharsToArray(input)).toEqual(expectedOutput);
  });
});

describe('sanitize', () => {
  test('returns a sanitized string', () => {
    const input = 'HEY: ThIs Is hArD tO rEaD!';
    const expectedOutput = 'hey: this is hard to read!';

    expect(sanitize(input)).toEqual(expectedOutput);
  });

  test('returns empty if string empty', () => {
    expect(sanitize('')).toEqual('');
  });
});
