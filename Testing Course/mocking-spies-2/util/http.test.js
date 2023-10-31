import { describe, it, expect, vi } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';

const responseData = { key: 'data' };
const response = {
    ok: true,
    json() {
        return new Promise((resolve, reject) => {
            resolve(responseData);
        });
    }
};
const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('Not a string!');
        }
        resolve(response);
    });
});
vi.stubGlobal('fetch', testFetch);

const data = { key: 'test' };

describe('#sendDataRequest', () => {
    it('should return any available response data', () => {
        expect(sendDataRequest(data)).resolves.toEqual(responseData);
    });

    it('should convert the provided data to JSON before sending the request', async () => {
        let errorMessage;

        try {
            await sendDataRequest(data);
        } catch (error) {
            errorMessage = error;
        }

        expect(errorMessage).not.toBe('Not a string!');
    });

    it('should throw an HttpError in case of non ok response', () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const failedResponse = {
                    ...response,
                    ok: false
                };
                resolve(failedResponse);
            });
        });

        expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
    });
});
