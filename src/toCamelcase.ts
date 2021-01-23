export default function (word: string): string {

    const wordArray:string[] = word.split(" ");

    let result = "";

    for(let i = 0, len = wordArray.length; i < len; i ++){
        const word = wordArray[i];
        let tempString = word.toLowerCase();
        if(i){
            tempString = tempString.substr(0, 1).toUpperCase() + tempString.substr(1);
        }

        result += tempString;
    }

    return result;
}