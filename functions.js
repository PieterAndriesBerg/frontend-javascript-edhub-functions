/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function sum(x, y, z) {
    return x + y + z;
}

// om de uitkomst te kunnen zien moet de functie-aanroep nog wel omwikkelen met een console.log()
console.log(sum(11,3, 9));

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

function wizard(first, second) {
    return first + second;
}

wizard("abra", "cadabra");

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function surround(word, character) {
    return character + word + character;
}

surround("bril", "*");

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

concatenate(["a", "b", "c"]);

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
            return greeting = greeting + "en " + stringsArray[i] + "!";
        }
        // als de array maar twee namen bevat, voeg dan geen komma toe
        if (stringsArray.length === 2) {
            greeting = greeting + stringsArray[i] + " ";
        }
        // als de array meer dan twee namen bevat, voeg dan wel een komma toe
        if (stringsArray.length > 2) {
            greeting = greeting + stringsArray[i] + ", ";
        }
    }

    return greeting;
}

greeting(["Piet", "Henk"]);