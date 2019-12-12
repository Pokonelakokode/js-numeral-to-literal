const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve",
    "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const methods = [
    {scale: "sextillion", divider: 1000000000000000000000},
    {scale: "quintillion", divider: 1000000000000000000},
    {scale: "quadrillion", divider: 1000000000000000},
    {scale: "trillion", divider: 1000000000000},
    {scale: "billion", divider: 1000000000},
    {scale: "million", divider: 1000000},
    {scale: "thousand", divider: 1000},
    {scale: "hundred", divider: 100},
];

export function convertToLiteral(input: number): string {
    if (isNaN(input)) { return "You should only input numbers"; }
    if (input === 0) {return "zero"; }
    const output = digestNumber(input);
    if (output.number > 0) {
        output.literal += `${output.literal ? "and " : ""}${digest2Digits(output.number)}`;
    }
    return output.literal;
}

export function digestNumber(input: number): {literal: string, number: number} {
    return methods.reduce((acc, el) => {
        if (el.divider > input) { return acc; }
        const num = Math.floor(acc.number / el.divider);
        if (num < 2 && el.scale === "thousand" || num === 0) { return acc; }
        switch (true) {
            case num < 100:
                acc.literal += `${digest2Digits(num % 100)} ${el.scale} `;
                acc.number -= num * el.divider;
                break;
            default:
                acc.literal += `${digestNumber(num).literal}${num % 100 === 0 ? "" : `${digest2Digits(num % 100)} ${el.scale} `}`;
                acc.number -= num * el.divider;
                break;
        }
        return acc;
    }, {literal: "", number: input});
}

export function digest2Digits(input: number): string {
    switch (true) {
        case input > 19:
            return `${tens[Math.floor(input / 10) - 2]}${input % 10 === 0 ? "" : `-${digits[input % 10]}`}`;
        case input === 0:
            return "zero";
        case input <= 19:
            return digits[input];
    }
}
