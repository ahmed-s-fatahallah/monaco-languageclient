/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2024 TypeFox and others.
 * Licensed under the MIT License. See LICENSE in the package root for license information.
 * ------------------------------------------------------------------------------------------ */

import { EditorAppClassic, EditorAppExtended } from 'monaco-editor-wrapper';

export const createMonacoEditorDiv = () => {
    const div = document.createElement('div');
    div.id = 'monaco-editor-root';
    document.body.insertAdjacentElement('beforeend', div);
    return div;
};

export const updateExtendedAppPrototyp = async () => {
    EditorAppExtended.prototype.specifyServices = async () => {
        console.log('Using overriden EditorAppExtended.prototype.specifyServices');
        return Promise.resolve({});
    };
    EditorAppClassic.prototype.specifyServices = async () => {
        console.log('Using overriden EditorAppClassic.prototype.specifyServices');
        return Promise.resolve({});
    };
};
