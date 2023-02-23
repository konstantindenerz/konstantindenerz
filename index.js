#!/usr/bin/env node

import {readFileSync} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const args = process.argv;

if (args.includes('-h')) {
    console.log(`\r\nUsage: npx konstantindenerz@latest [options]\r\n
Options: 
   -q              Show card with QR code
   -i              Show card with icons (Requires font like nerd font)
   -a              Show card with icons and QR code
        `)

    process.exit(0);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
let contentPath = 'bin/output';
if (args.includes('-q')) {
    contentPath += '-q';
}

if (args.includes('-i')) {
    contentPath += '-i';
}

if (args.includes('-a')) {
    contentPath += '-a';
}
const output = readFileSync(join(__dirname, contentPath), 'utf8');
console.log(output);
