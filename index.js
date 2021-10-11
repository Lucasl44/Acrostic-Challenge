const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let message = argv.text.toLowerCase().split(" ");
let text = argv.message.toLowerCase();
let eText = text.replace(/[^A-Z0-9]+/gi, "");
eText = eText.split("");
let lText = eText;

let first = []
let last = []

console.log("Input in the form --message is the text that is to be found, and --text is the passage that should contain the text");
console.log("");
for (const element of message) {
    first = [...first, element[0]];
    last = [...last, element[element.length - 1]];
}


for (let i = 0; i < first.length + 1; i++) {
    for (let x = 0; x < eText.length + 1; x++) {
        if (eText[x] == first[i]){
            eText.splice(x, 1);
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
    console.log(`The input text: "${argv.message}" is found within the message: "${argv.text}"`);
} else {
    console.log(`!!!The input text: "${argv.message}" is not found within the message: "${argv.text}"`);
}
