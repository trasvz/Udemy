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
    const testData = 'Test';
    const testFileName = 'test.txt';

    it('should execute the writeFile method', () => {
        writeData(testData, testFileName);
    
        expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    });

    it('should return a promise that resolves to no value if called correctly', () => {
        expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    });
});
