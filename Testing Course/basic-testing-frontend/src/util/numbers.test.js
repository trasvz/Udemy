import { it, expect, describe } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers.js';

describe('#transformToNumber', () => {
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
});

describe('#cleanNumbers', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const input = ['1', '2', '3'];

        const result = cleanNumbers(input);

        expect(result[0]).toBeTypeOf('number');
    });
});
