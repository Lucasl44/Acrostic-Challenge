const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let message = argv.message.toLowerCase().split(" ");
let text = argv.text.toLowerCase();
let eText = text.replace(/[^A-Z0-9]+/gi, "");
eText = eText.split("");
let lText = eText;

let first = []
let last = []

for (const element of message) {
    first = [...first, element[0]];
    last = [...last, element[element.length - 1]];
}


for (let i = 0; i < first.length + 1; i++) {
    for (let x = 0; x < eText.length + 1; x++) {
        if (eText[x] == first[i]){
            eText.splice(x, 1);
            console.log(eText);
        }
    }
}

for (let i = 0; i < last.length; i++) {
    for (let x = 0; x < lText.length; x++) {
        if (lText[x] == last[i]){
            lText.splice(x, 1);
        }
    }
};

if ((eText.length == 0) || (lText.length == 0)) {
    console.log(`The input text: ${argv.text} is found within the message: "${argv.message}"`);
} else {
    console.log(`!!!The input text: ${argv.text} is not found within the message: "${argv.message}"`);
}
