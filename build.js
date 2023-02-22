import chalk from 'chalk';
import boxen from 'boxen';
import {writeFileSync} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const options = {
    padding: 1, margin: 1, borderStyle: 'round', borderColor: 'white'
}

const content = `                 ${chalk.white.bold('KONST∆NTIN DENERZ')}
                    
                          
   ${chalk.grey(`#Angular #Material #UX ${chalk.green('⚡')}UI #nvim, #TS #SCSS`)} 
        
                 
${chalk.white('Job')}                  ${chalk.white('Consultant & Architect & Coach')}
${chalk.white('Twitter')}                 ${chalk.white(`https://twitter.com/${chalk.green('kdenerz')}`)}
${chalk.white('Web')}                   ${chalk.white(`https://${chalk.green('konstantin-denerz')}.com`)}
${chalk.white('Work')}     ${chalk.white(`https://thinktecture.com/${chalk.green('konstantin-denerz')}`)}
${chalk.white('Github')}          ${chalk.white(`https://github.com/${chalk.green('konstantindenerz')}`)}
${chalk.white('LinkedIn')}   ${chalk.white(`https://linkedin.com/in/${chalk.green('konstantindenerz')}`)}
${chalk.white('Card')}                           ${chalk.white(`npx ${chalk.green('konstantindenerz')}`)}`

const card = chalk.white(boxen(content, options))
writeFileSync(join(__dirname, './bin/output'), card);
console.log(card);