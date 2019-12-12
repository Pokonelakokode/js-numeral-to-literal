import convertToLiteral from "./index";

describe("Converter",() => {
    it('should return warning text on non numerical input', function () {
        const input = "Not a number" as unknown as number;
        expect(convertToLiteral(input)).toBe("You should only input numbers");
    });
});