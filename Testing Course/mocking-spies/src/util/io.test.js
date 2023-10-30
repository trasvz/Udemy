import { it, expect } from 'vitest';

import writeData from './io.js';

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFileName = 'test.txt';

    expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
