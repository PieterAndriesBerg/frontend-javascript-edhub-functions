/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function addNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}
console.log(addNumbers(3, 4, 5));

// Zelfde functie maar dan als arrow-function
const add_numbers = (number1, number2, number3) => number1 + number2 + number3;

console.log(add_numbers(3,4,5));


/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function connectStrings(string1, string2) {
    return string1 + string2;
}
console.log(connectStrings("abra","cadabra"));

//Zelfde functie maar dan als arrow-function
const connect_strings = (string1, string2) => string1 + string2;
console.log(connect_strings("abra", "cadabra"));


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
function addChar(word, character) {
    return character + word + character;
}

console.log(addChar("bril","*"));

// zelfde functie maar dan als arrow function
const add_char = (word, character) => character + word + character;
console.log(add_char("kaas","^"));


/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function concatenate(wordArray) {
    let output = "";

    for (let i = 0; i < wordArray.length; i++) {
        output = output + wordArray[i];
    }
    return output;
}

console.log(concatenate(["a","b","c"]));


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"
function greeting(stringsArray) {
    let greeting = "Hoi ";

    for (let i = 0; i < stringsArray.length; i++) {
        // als dit de laatste entry is, voeg dan het uitroepteken toe
        if (i === stringsArray.length - 1) {
            // de return zorgt ervoor dat er niet meer naar de andere if-statements gekeken wordt
            return greeting = greeting + " en " + stringsArray[i] + "!";
        }
        // als de array maar twee namen bevat of we zijn bij de één-na-laatste naam, voeg dan alleen de naam toe
        if (stringsArray.length === 2 || i === stringsArray.length - 2) {
            greeting = greeting + stringsArray[i];
        } else {
            // in andere alle gevallen voegen we een komma en spatie toe
            greeting = greeting + stringsArray[i] + ", ";
        }
    }

    return greeting;
}

greeting(["Piet", "Henk"]);
greeting(["A", "B", "C", "D", "E", "F"]);
