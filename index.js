#!/usr/bin/env node

import {readFileSync} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const output = readFileSync(join(__dirname, 'bin/output'), 'utf8');
console.log(output);
