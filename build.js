import chalk from 'chalk';
import boxen from 'boxen';
import {writeFileSync} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const options = {
    padding: 1, margin: 1, borderStyle: 'round', borderColor: 'white'
}

const qrcode = `

             █▀▀▀▀▀█ ▀▄▄▀▀ ▀ ▄ █▀▀▀▀▀█
             █ ███ █   ▀ ██▀ █ █ ███ █
             █ ▀▀▀ █  ▀▄▀▄▀█ █ █ ▀▀▀ █
             ▀▀▀▀▀▀▀ █ █▄▀▄▀▄█ ▀▀▀▀▀▀▀
             ▀▀▄▀█▄▀ ▄█▀▀█▄▄▄█▄▀▄▄▄▄▄▀
             ▀█▄█ ▀▀█ ▄█▀█▀▄█▄ ▀▄▀█▄▄█
             ▄██▄▄ ▀▄▄▀ ▄  ▄█▄ ▀ ▄  ▄▀
             █▀███▄▀▄█ ▀▄█  ▀ ▄▄▄▀██▀█
             ▀ ▀ ▀▀▀▀▄▀▀▀ ▀ ▀█▀▀▀█ ██ 
             █▀▀▀▀▀█  ██▀ █▄▄█ ▀ █  ▄▀
             █ ███ █ █ ▀▄▀ █▀███▀▀  ▄▄
             █ ▀▀▀ █ ▄▀ ▀▀ ▄▄  ▄▄█▀███
             ▀▀▀▀▀▀▀ ▀ ▀ ▀   ▀▀▀  ▀  ▀`

const content = `                 ${chalk.white.bold('KONST∆NTIN DENERZ')}
                    
                          
   ${chalk.grey(`#Angular #Material #UX ${chalk.green('⚡')}UI #Neovim #TS #SCSS`)} 
        
                 
${chalk.white('Job')}                  ${chalk.white('Consultant & Architect & Coach')}
${chalk.white('Twitter')}                 ${chalk.white(`https://twitter.com/${chalk.green('kdenerz')}`)}
${chalk.white('Web')}                   ${chalk.white(`https://${chalk.green('konstantin-denerz')}.com`)}
${chalk.white('Work')}     ${chalk.white(`https://thinktecture.com/${chalk.green('konstantin-denerz')}`)}
${chalk.white('GitHub')}          ${chalk.white(`https://github.com/${chalk.green('konstantindenerz')}`)}
${chalk.white('LinkedIn')}   ${chalk.white(`https://linkedin.com/in/${chalk.green('konstantindenerz')}`)}
${chalk.white('Card')}                           ${chalk.white(`npx ${chalk.green('konstantindenerz')}`)}`;

const icons = {
    'Job': '  ',
    'Twitter': '      ',
    'Web': '󰟒  ',
    'Work': '   ',
    'GitHub': '     ',
    'LinkedIn': '󰌻       ',
    'Card': '   ',
}

const card = chalk.white(boxen(content, options))
writeFileSync(join(__dirname, './bin/output'), card);
console.log(card);

const cardWithQRCode = chalk.white(boxen(`${content}${qrcode}`, options))
writeFileSync(join(__dirname, './bin/output-q'), cardWithQRCode);
console.log(cardWithQRCode);

let contentWithIcons = content;
Object.entries(icons).forEach(([key, value]) => {
    contentWithIcons = contentWithIcons.replaceAll(chalk.white(key), chalk.red.bold(value));
});
const cardWithIcons = chalk.white(boxen(contentWithIcons, options))
writeFileSync(join(__dirname, './bin/output-i'), cardWithIcons);
console.log(cardWithIcons);

const cardWithIconsAndQrCode = chalk.white(boxen(`${contentWithIcons}${qrcode}`, options))
writeFileSync(join(__dirname, './bin/output-a'), cardWithIconsAndQrCode);
console.log(cardWithIconsAndQrCode);