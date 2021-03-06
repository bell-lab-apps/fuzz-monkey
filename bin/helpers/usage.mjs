import chalk from 'chalk';
import { highlight } from './output.mjs';

export default function usage() {
    return `
  ${chalk.italic('Usage:')}
    ${chalk.gray('$')} ${highlight('fuzzmonkey')} ${chalk.gray(
        '--url'
    )} http://www.example.com/
  ${chalk.italic('Options:')}
    ${chalk.gray('--url')}         Domain to use for the testing.
    ${chalk.gray('--hooks')}       Path to the hooks file to setup page.
       ${chalk.gray(
           '--debug'
       )}       Disable headless mode and open devtools ${chalk.gray(
        '(default: false)'
    )}.
    ${chalk.gray('--template')}    Re-run the testing from a JSON template.
     ${chalk.gray(
         '--directory'
     )}   Directory to place the generated reports ${chalk.gray(
        '(default: cwd)'
    )}.
     ${chalk.gray(
         '--strategy'
     )}    Specify how likely an action is to run ${chalk.gray(
        '(example: --strategy clicker=10,reloader=0)'
    )}.
    ${chalk.gray(
        '--warnings'
    )}    Whether to show the request warnings ${chalk.gray(
        '(default: false)'
    )}.
    ${chalk.gray('--iterations')}  Number of actions to perform ${chalk.gray(
        '(default: 50)'
    )}.
`;
}
