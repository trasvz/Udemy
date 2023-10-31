import { describe, it, expect, vi } from 'vitest';

import { HttpError, ValidationError } from './errors';


const status = 1;
const message = 'Test'
const data = { key: 'test' };

describe('#HttpError', () => {
    it('should contain the provided status code, message, and data', () => {
        const result = new HttpError(status, message, data);

        expect(result.statusCode).toBe(status);
        expect(result.message).toBe(message);
        expect(result.data).toBe(data);
    });

    it('should contain undefined as data if no data is provided', () => {
        const result = new HttpError(status, message);

        expect(result.statusCode).toBe(status);
        expect(result.message).toBe(message);
        expect(result.data).toBeUndefined();
    });
});

describe('#ValidationError', () => {
    it('should contain provided message', () => {
        const result = new ValidationError(message);

        expect(result.message).toBe(message);
    });
});
