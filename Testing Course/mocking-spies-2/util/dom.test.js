import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { showError } from './dom';

const htmlDocumentPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocumentPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('#showError', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        document.write(htmlDocumentContent);
    });

    it('should add an error paragraph to the errors id element', () => {
        showError();

        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph).not.toBeNull();
    });

    it('should not contain an error paragraph initially', () => {
        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph).toBeNull();
    });

    it('should output the provided message in the error paragraph', () => {
        const errorMessage = 'error';

        showError(errorMessage);
        const errorElement = document.getElementById('errors');
        const errorParagraph = errorElement.firstElementChild;

        expect(errorParagraph.textContent).toBe(errorMessage);
    });
});
