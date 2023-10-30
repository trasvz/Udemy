import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io.js';

vi.mock('fs');

describe('#writeData', () => {
    it('should execute the writeFile method', () => {
        const testData = 'Test';
        const testFileName = 'test.txt';

        writeData(testData, testFileName);
    
        expect(fs.writeFile).toBeCalled();
    });    
});
