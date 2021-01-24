import getWordsFromString from "./getWordsFromString";

export default function (word: string): string {
    
    if(!word) return "";

    const wordArray:string[] = getWordsFromString(word);
    const tArr = [];

    for(let i = 0, len = wordArray.length; i < len; i ++){
        const word = wordArray[i];
        tArr.push(word.toLowerCase());
    }
    
    const result = tArr.join("_");


    return result;
}