const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const methods = [
    {'scale':'billion','divider':1000000000},
    {'scale':'million','divider':1000000},
    {'scale':'thousand','divider':1000},
    {'scale':'hundred','divider':100}
];

export default function convertToLiteral(input:number):string {
    if (isNaN(input)){ return "You should only input numbers" }
}