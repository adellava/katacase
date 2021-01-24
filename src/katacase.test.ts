import katacase from "./katacase";

const obj = {
    "italian poets ": {
        "DanteAlighieri": {
            "La Commedia": {
                " l inferno ": 11,
                " il purgatorio ": 11,
                "paradiso ": 11,
            },
            "Convivio": 1
        },
        "Boccaccio giovanni": { 
            " il decameron": 10
        },
        " f. petrarca": {
            " il canzioniere": 123
        },
    }
};

test('it should transform object keys in camelcase', () => {
    expect(katacase.deepObjectToCamelcase(obj)).toEqual({
        "italianPoets": {
            "danteAlighieri": {
                "laCommedia": {
                    "lInferno": 11,
                    "ilPurgatorio": 11,
                    "paradiso": 11,
                },
                "convivio": 1
            },
            "boccaccioGiovanni": { 
                "ilDecameron": 10
            },
            "fPetrarca": {
                "ilCanzioniere": 123
            },
        }
    });
});