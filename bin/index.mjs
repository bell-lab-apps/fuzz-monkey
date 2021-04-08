#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import figlet from 'figlet';
import capitalise from 'capitalize';
import chalk from 'chalk';
import runFuzzMonkey from '../src/index.mjs';

const bin = path.dirname(new URL(import.meta.url).pathname);
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(`${bin}/../package.json`), 'utf8')
);

async function main() {
  const header = figlet.textSync(capitalise(pkg.name), { font: 'univers' });
  header && console.log(chalk.gray(header));
  console.log(
    '\n',
    chalk.gray('Version:'.padStart(header ? 121 : 0)),
    pkg.version,
    '\n\n'
  );
  return await runFuzzMonkey();
}

main();
