// If Else
var x = 10;
var y = 5;

if (x > 5) {
    console.log("X (" + x + ") lebih besar dari 5");

    if (y > 3) {
        console.log("Y (" + y + ") lebih besar dari 3");
    } else {
        console.log("Y (" + y + ") tidak lebih besar dari 3");
    }
} else {
    console.log("X (" + x + ") tidak lebih besar dari 5");
}
// End If Else

// Switch Case
var category = "Buah";
var item = "Semangka";
var result;

switch (category) {
    case "Buah":
        switch (item) {
            case "Semangka":
                result = "Ini adalah buah Semangka.";
                break;
            case "Mangga":
                result = "Ini adalah buah Mangga.";
                break;
            default:
                result = "Ini buah, tetapi bukan Semangka ataupun Mangga.";
        }
        break;
    case "Sayuran":
        switch (item) {
            case "Kangkung":
                result = "Ini adalah sayur Kangkung.";
                break;
            case "Buncis":
                result = "Ini adalah sayur Buncis.";
                break;
            default:
                result = "Ini sayuran, tetapi bukan Kangkung ataupun Buncis.";
        }
        break;
    default:
        result = "Ini bukan buah ataupun sayuran.";
}

console.log(result);

// End Switch Case

// For Statement
console.log("Perkalian 1 sampai 5")
for (angka1 = 1; angka1 <= 5; angka1++) {
    for (angka2 = 1; angka2 <= 5; angka2++) {
        console.log(angka1 + " * " + angka2 + " = " + (angka1 * angka2));
    };
};
// End For Statement

// While, Do-While
angka3 = 0;
angka4 = 0;

console.log("Perulangan while")
while (angka3 < 5) {
    console.log(angka3);
    angka3++;
}

console.log("Perulangan do-while")
do {
    console.log(angka4);
    angka4++;
} while (angka4 <= 5);
// End While, Do-While

// Function
var greet = function(name, time) {
    return "Hello, " + "Good " + time + " " + name + "!";
};

var greetingMessage = greet("Adhim", "Morning");
console.log(greetingMessage);
// End Function