import convertToLiteral, {digest2Digits, digestNumber} from "./index";

const digitTests:[number,string][] = [
    [99,'ninety-nine'],
    [86,'eighty-six'],
    [71,'seventy-one'],
    [63,'sixty-three'],
    [54,'fifty-four'],
    [47,'fourty-seven'],
    [30,'thirty'],
    [19,'nineteen'],
    [11,'eleven'],
    [10,'ten'],
    [5,'five'],
    [0,'zero']
];

const bigNumTests:[number,string][] = [
    [3453,'three thousand four hundred and fifty-three'],
    [2001,"two thousand and one"],
    [543453,'five hundred fourty-three thousand four hundred and fifty-three'],
    [285690385,'two hundred eighty-five million six hundred ninety thousand three hundred and eighty-five'],
    [17999,"seventeen thousand nine hundred and ninety-nine"],
    [1999,"nineteen hundred and ninety-nine"],
    [1999507286066,"nineteen hundred ninety-nine billion five hundred seven million two hundred eighty-six thousand and sixty-six"]
];


describe("Converter",() => {
    it('should return warning text on non numerical input', function () {
        const input = "Not a number" as unknown as number;
        expect(convertToLiteral(input)).toBe("You should only input numbers");
    });
});



describe("convertToLiteral",() => {
    it.each([...digitTests,...bigNumTests])("%d is %s TEST", (num,string) => {
        expect(convertToLiteral(num)).toBe(string);
    });
});

describe("digest2Digits",() => {
    it.each(digitTests)("%d is %s TEST", (num,string) => {
        expect(digest2Digits(num)).toBe(string);
    });
});