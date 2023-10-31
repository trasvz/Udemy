import { describe, it, expect } from 'vitest';

import { extractPostData } from './posts';
describe('#extractPostData', () => {
    it('should extract title and content from the provided form data', () => {
        const title = 'title';
        const content = 'content';
        const formData = {
            title: title,
            content: content,
            get(identifier) {
                return this[identifier];
            }
        };

        const result = extractPostData(formData);

        expect(result.title).toBe(title);
        expect(result.content).toBe(content);
    });
});
