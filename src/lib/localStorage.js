export function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data)) // umwandeln von JSON lesbaren Format -> string
}
console.log(localStorage);

export function loadFromLocal(key) { // try catch Fehlerhandling
    try {
        const localData = localStorage.getItem(key);
        return JSON.parse(localData); // umwandeln von JSON lesbaren Format
    } catch (error) {
        console.error();
    }
    
}