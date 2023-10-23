import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number into an actual number', () => {
    const input = '3';
    const expectedResult = 3;

    const actualResult = transformToNumber(input);

    expect(actualResult).toEqual(expectedResult);
});

it('should return NaN if non string number is provided', () => {
    const stringInput = 'string';
    const objectInput = {};

    const actualResultString = transformToNumber(stringInput);
    const actualResultObject = transformToNumber(objectInput);

    expect(actualResultString).toBeNaN();
    expect(actualResultObject).toBeNaN();
});
