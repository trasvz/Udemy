import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('#generateResultText', () => {
    it('should return a string no matter which value is passed in', () => {
        const numberInput = 1;
        const stringInput = 'string';
        const booleanInput = true;

        const numberResult = generateResultText(numberInput);
        const stringResult = generateResultText(stringInput);
        const booleanResult = generateResultText(booleanInput);

        expect(numberResult).toBeTypeOf('string');
        expect(stringResult).toBeTypeOf('string');
        expect(booleanResult).toBeTypeOf('string');
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;
    
        const resultText = generateResultText(result);
    
        expect(resultText).toContain(result.toString());
    });
    
    it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
    });

    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
    });
});
