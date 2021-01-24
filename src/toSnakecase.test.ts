import toSnakecase from "./toSnakecase";

interface Case {
    input: string,
    output: string,
}

const cases:Case[] = [
    {
        input: "il sol che move il sole",
        output: "il_sol_che_move_il_sole"
    },
    {
        input: "Amor, ch'al cor gentile ratto s'apprende,!!5 --!~@#$%%^&*( (Inferno)",
        output: "amor_ch_al_cor_gentile_ratto_s_apprende_5_inferno"
    },
    {
        input: " ... un volgo disperso che nome non ha  ",
        output: "un_volgo_disperso_che_nome_non_ha"
    },
    {
        input: "     ",
        output: ""
    },
];

test('it should transform a string in camel case', () => {
    for(const aCase of cases) {
        expect(toSnakecase(aCase.input)).toBe(aCase.output);
    }
});