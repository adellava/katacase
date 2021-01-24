import stringToCamelCase from "./toCamelcase";
import stringToSnakeCase from "./toSnakecase";
interface keyable {
    [key: string]: any  
}

interface strategySignature {
    (word:string):string;
}

const deepObjectKeyTransformFactory = ( strategy:strategySignature) => {
    return (obj:any): keyable => {
        const objectToStrategy = (anObj:any): keyable => {
            const keys = Object.keys(anObj);
            const result:keyable = {};
            for(const key of keys){
                const newKey:string = strategy(key);
                const value = anObj[key]
                result[newKey] = typeof(value) === "object" ? objectToStrategy(value) : value;
            }
            return result;
        }
        return objectToStrategy(obj);
    }
}

const deepObjectToCamelcase = deepObjectKeyTransformFactory(stringToCamelCase);
const deepObjectToSnakecase = deepObjectKeyTransformFactory(stringToSnakeCase);

export default {
    stringToCamelCase,
    stringToSnakeCase,
    deepObjectToCamelcase,
    deepObjectToSnakecase
}