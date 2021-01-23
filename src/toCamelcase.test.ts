import toCamelcase from "./toCamelcase";

test('dummy', () => {
    expect(toCamelcase("mondo")).toBe("ciao! mondo!!!!");
});