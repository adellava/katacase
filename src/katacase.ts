import stringToCamelCase from "./toCamelcase";

interface keyable {
    [key: string]: any  
}


const deepObjectToCamelcase = (obj:any): keyable => {

    const objectToCamelcase = (anObj:any): keyable => {
        const keys = Object.keys(anObj);
        const result:keyable = {};
        for(const key of keys){
            const newKey:string = stringToCamelCase(key);
            const value = anObj[key]
            result[newKey] = typeof(value) === "object" ? objectToCamelcase(value) : value;
        }
        return result;
    }

    return objectToCamelcase(obj);
};


export default {
    stringToCamelCase,
    deepObjectToCamelcase
}