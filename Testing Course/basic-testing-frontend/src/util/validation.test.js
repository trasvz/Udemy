import { describe, it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('#validateStringNotEmpty', () => {
    it('should not throw error when not empty string is provided', () => {
        const input = 'string';
    
        const triggerFunction = () => { validateStringNotEmpty(input); };
    
        expect(triggerFunction).not.toThrow();
    });
    
    it('should throw error when empty string is provided', () => {
        const input = '';
    
        const triggerFunction = () => { validateStringNotEmpty(input); };
    
        expect(triggerFunction).toThrow();
    });
    
    it('should throw error when any other value than a string is provided', () => {
        const numericInput = 1;
        const booleanInput = true;
        const objectInput = {};
    
        const triggerFunctionNumeric = () => { validateStringNotEmpty(numericInput); };
        const triggerFunctionBoolean = () => { validateStringNotEmpty(booleanInput); };
        const triggerFunctionObject = () => { validateStringNotEmpty(objectInput); };
    
        expect(triggerFunctionNumeric).toThrow();
        expect(triggerFunctionBoolean).toThrow();
        expect(triggerFunctionObject).toThrow();
    });
});

describe('#validateNumber', () => {
    it('should not throw error when actual number is provided', () => {
        const input = 1;

        const triggerFunction = () => { validateNumber(input); };

        expect(triggerFunction).not.toThrow();
    });

    it('should throw error when string with non numeric values is provided', () => {
        const input = 'string';

        const triggerFunction = () => { validateNumber(input); };

        expect(triggerFunction).toThrow();
    });

    it('should throw error when string with numeric values is provided', () => {
        const input = '1';

        const triggerFunction = () => { validateNumber(input); };

        expect(triggerFunction).toThrow();
    }); 
});
