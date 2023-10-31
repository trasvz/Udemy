import { describe, it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

describe('#validateNotEmpty', () => {
    it('should throw an error if an empty string is provided as a value', () => {
        const input = '';

        const validationFunction = () => validateNotEmpty(input);

        expect(validationFunction).toThrow();
    });

    it('should throw an error if space as string is provided as a value', () => {
        const input = ' ';

        const validationFunction = () => validateNotEmpty(input);

        expect(validationFunction).toThrow();
    });

    it('should throw an error with the provided error message', () => {
        const input = '';
        const errorMessage = 'test';

        const validationFunction = () => validateNotEmpty(input, errorMessage);

        expect(validationFunction).toThrow(errorMessage);
    });
});
