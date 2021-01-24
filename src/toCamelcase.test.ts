import toCamelcase from "./toCamelcase";

interface Case {
    input: string,
    output: string,
}

const cases:Case[] = [
    {
        input: "il sol che move il sole",
        output: "ilSolCheMoveIlSole"
    },
    {
        input: "Amor, ch'al cor gentile ratto s'apprende,!!5 --!~@#$%%^&*( (Inferno)",
        output: "amorChAlCorGentileRattoSApprende5Inferno"
    },
    {
        input: " ... un volgo disperso che nome non ha  ",
        output: "unVolgoDispersoCheNomeNonHa"
    },
    {
        input: "     ",
        output: ""
    },
];

test('it should transform a string in camel case', () => {
    for(const aCase of cases) {
        expect(toCamelcase(aCase.input)).toBe(aCase.output);
    }
});