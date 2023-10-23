import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
    const arrayToSummarize = [1, 2];
    const expectedResult = 3;
    
    const actualResult = add(arrayToSummarize);

    expect(actualResult).toEqual(expectedResult);
});
