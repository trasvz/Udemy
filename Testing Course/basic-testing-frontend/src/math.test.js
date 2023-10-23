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
