import toCamelcase from "./toCamelcase";

interface Case {
    input: string,
    output: string,
}

const cases:Case[] = [
    {input: "il sol che move il sole", output: "ilSolCheMoveIlSole"}
];

test('it should transform a string in camel case', () => {
    for(const aCase of cases) {
        expect(toCamelcase(aCase.input)).toBe(aCase.output);
    }
});