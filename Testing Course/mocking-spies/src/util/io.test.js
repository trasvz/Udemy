import { it, expect, describe } from 'vitest';

import writeData from './io.js';

describe('#writeData', () => {
    it('should execute the writeFile method', () => {
        const testData = 'Test';
        const testFileName = 'test.txt';
    
        expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    });    
});
