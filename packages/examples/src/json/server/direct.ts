/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2024 TypeFox and others.
 * Licensed under the MIT License. See LICENSE in the package root for license information.
 * ------------------------------------------------------------------------------------------ */
import { resolve } from 'path';
import { runJsonServer } from './main.js';
import { getLocalDirectory } from '../../utils/fs-utils.js';

const baseDir = resolve(getLocalDirectory(import.meta.url));
const relativeDir = '../../../dist/json/server/json-server.js';
runJsonServer(baseDir, relativeDir);
