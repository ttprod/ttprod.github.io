/** @param {string} name */
export function getNumberOfChars(name) {
    // return the number of characters in: name
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // return the first character of: name
    return name[0];
}

/** @param {string} name */
export function getLastChar(name) {
    // return the last character of: name
    return name[name.length - 1];
}

/** @param {string} name */
export function getLower(name) {
    // return name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // return name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    // return a capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

/** @param {string} name */
export function getClean(name) {
    // return name without trailing and leading space (example: " alex " becomes: "alex")
    return name.replace(/\s/g, '');
}
