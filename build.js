import chalk from "chalk";
import boxen from "boxen";
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "white",
};

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
             ▀▀▀▀▀▀▀ ▀ ▀ ▀   ▀▀▀  ▀  ▀`;

const content = `                 ${chalk.white.bold("KONST∆NTIN DENERZ")}
                    
                          
     ${chalk.grey(`#GenAI #Angular #Material #UX ${chalk.green("⚡")}UI #SCSS`)} 
        
                 
${chalk.white("Job")}             ${chalk.white("Dev | Designer | CSS Wizard | Coach")}
${chalk.white("X")}                             ${chalk.white(`https://x.com/${chalk.green("kdenerz")}`)}
${chalk.white("Web")}                   ${chalk.white(`https://${chalk.green("konstantin-denerz")}.com`)}
${chalk.white("GitHub")}          ${chalk.white(`https://github.com/${chalk.green("konstantindenerz")}`)}
${chalk.white("CodePen")}         ${chalk.white(`https://codepen.io/${chalk.green("konstantindenerz")}`)}
${chalk.white("Work")}     ${chalk.white(`https://thinktecture.com/${chalk.green("konstantin-denerz")}`)}
${chalk.white("Bluesky")}        ${chalk.white(`https://blskyl.ink/${chalk.green("konstantindenerz")}`)}
${chalk.white("Mastodon")}   ${chalk.white(`https://mastodon.world/@${chalk.green("konstantindenerz")}`)}
${chalk.white("LinkedIn")}   ${chalk.white(`https://linkedin.com/in/${chalk.green("konstantindenerz")}`)}
${chalk.white("Card")}                           ${chalk.white(`npx ${chalk.green("konstantindenerz")}`)}`;

const icons = {
  Job: "  ",
  X: "",
  Web: "󰟒  ",
  Work: "   ",
  GitHub: "     ",
  CodePen: "      ",
  Bluesky: "       ",
  Mastodon: "󰫑       ",
  LinkedIn: "󰌻       ",
  Card: "   ",
};

const card = chalk.white(boxen(content, options));
writeFileSync(join(__dirname, "./bin/output"), card);
console.log(card);

const cardWithQRCode = chalk.white(boxen(`${content}${qrcode}`, options));
writeFileSync(join(__dirname, "./bin/output-q"), cardWithQRCode);
console.log(cardWithQRCode);

let contentWithIcons = content;
Object.entries(icons).forEach(([key, value]) => {
  contentWithIcons = contentWithIcons.replaceAll(
    chalk.white(key),
    chalk.red.bold(value),
  );
});
const cardWithIcons = chalk.white(boxen(contentWithIcons, options));
writeFileSync(join(__dirname, "./bin/output-i"), cardWithIcons);
console.log(cardWithIcons);

const cardWithIconsAndQrCode = chalk.white(
  boxen(`${contentWithIcons}${qrcode}`, options),
);
writeFileSync(join(__dirname, "./bin/output-a"), cardWithIconsAndQrCode);
console.log(cardWithIconsAndQrCode);
