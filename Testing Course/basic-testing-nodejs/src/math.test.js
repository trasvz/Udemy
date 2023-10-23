import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
    const arrayToSummarize = [1, 2];
    const expectedResult = 3;
    
    const actualResult = add(arrayToSummarize);

    expect(actualResult).toEqual(expectedResult);
});

it('should return NaN if at least one of number in an array is invalid number', () => {
    const arrayToSummarize = ['string', 2];

    const actualResult = add(arrayToSummarize);

    expect(actualResult).toBeNaN();
});

it('should return a correct sum if an array of numeric string values is provided', () => {
    const arrayToSummarize = ['1', '2', '3'];
    const expectedResult = 6;

    const actualResult = add(arrayToSummarize);

    expect(actualResult).toEqual(expectedResult);
});

it('should return 0 if empty array is provided', () => {
    const arrayToSummarize = [];
    const expectedResult = 0;

    const actualResult = add(arrayToSummarize);

    expect(actualResult).toBe(expectedResult);
});

it('should throw error if no value is provided', () => {
    const resultFunction = () => { add(); };

    expect(resultFunction).toThrow()
});

it('should throw an error if input is multiple argumeents instead of an array', () => {
    const firstArgument = 1;
    const secondArgument = 2;
    const resultFunction = () => { add(firstArgument, secondArgument); };
    
    expect(resultFunction).toThrow()
});
