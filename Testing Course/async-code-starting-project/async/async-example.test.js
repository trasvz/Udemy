import { it, expect, describe } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

describe('#generateToken', () => {
    it('should generate a token value', (done) => {
        const email = 'test@test.com';
    
        generateToken(email, (err, token) => {
            expect(token).toBeDefined();
            done();
        });
    }); 
});

describe('#generateTokenPromise', () => {
    it('should resolves a token', () => {
        const email = 'test@test.com';
    
        expect(generateTokenPromise(email)).resolves.toBeDefined();
    });
    
    it('should generate a result when called', async () => {
        const email = 'test@test.com';
    
        const result = await generateTokenPromise(email);
        
        expect(result).toBeDefined();
    });    
});

