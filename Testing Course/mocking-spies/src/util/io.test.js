import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io.js';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length -1];
            }
        }
    };
});

describe('#writeData', () => {
    it('should execute the writeFile method', () => {
        const testData = 'Test';
        const testFileName = 'test.txt';

        writeData(testData, testFileName);
    
        expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    });    
});
