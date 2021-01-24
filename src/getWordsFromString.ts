const splitWordsRegEx = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

export default (ph:string):string[] => {
    const words:string[]|null = ph.match(splitWordsRegEx);
    if(!words) return [];
    return words;
};