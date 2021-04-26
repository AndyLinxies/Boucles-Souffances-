//exo1
// for (let i = 1; i <= 5; i++) {
//     console.log("William");
//     console.log(i);
// }

//exo2
// let tab = ["dorian", "aziz", "co-pilote de l'iceberg"];

// for (let i = 0; i < tab.length; i++) {
//     console.log("Bonjour " + tab[i]);
// }

//exercice1

// let nombre = prompt("Veuillez indiquer un nombre:");

// for (let i = 0; i <= nombre; i+=2) {
//     console.log(i);
// }

//Exercice 2
// let max = prompt("Veuillez indiquer un nombre:");
// for (let i = 0; i <= max; i++) {
//     if (i%2 == 0) {
//         console.log(`${i} est paire`);
//     }
// }

//Exercie 3
// let arr = ["Alexis", "Loic", "kkkkkk", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];
// let paire = [];
// let impaire = [];

// arr.forEach((elemen, i) => {
//     if (i%2 == 0) {
//         console.log(elemen + " son index est paire");
//         paire.push(elemen);
//     } else {
//         console.log(elemen + " son index est impaire");
//         impaire.push(elemen);
//     }
// });

// console.log(paire , impaire);

//Exercice 4 partie 1
// let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam","Mihai", "Oussama", "Dorian", "Tania"];

// tab.forEach((element, i) => {
//     console.log(element);
//     console.log(element.charAt(0));
//     console.log(element.charAt(1));
//     console.log(element.charAt(1)+element);
//     if (i%2 == 0) {
//         console.log(element + " pair");
//     }
//     console.log("");
// });

//Exercice 4 partie 2
// let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania"];

// tab.forEach((e, i) => {
//     if (i%2 !== 0) {
//         console.log(e.toUpperCase());
//     } else {
//         console.log(e.charAt(0).toLowerCase() + e.substr(1));
//     }

//     if (i%2 === 0 && e.length > 4) {
//         console.log(e.charAt(0).toUpperCase());
//     }

//     if (e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") {
//         console.log(e);
//     }

//     if ((e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") && e.length > 5) {
//         console.log(e);
//     }
// });

//Exercice 4 partie 3
let tab = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "edwaerd", "edwaerddaz"];
let boite = [];
tab.forEach((e, i) => {
    // if ((e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "m" || e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n") && e.length < 5) {
    //     console.log(e.charAt(0).toUpperCase()+e.substr(1));
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 1 && e.length > 4) {
    //     console.log(e);
    // }
    // else if ((e.charAt(0).toLowerCase() === "k" || e.charAt(0).toLowerCase() === "c" || e.charAt(0).toLowerCase() === "m" ||e.charAt(0).toLowerCase() === "f" || e.charAt(0).toLowerCase() === "y" || e.charAt(0).toLowerCase() === "n" || e.charAt(0).toLowerCase() === "a" || e.charAt(0).toLowerCase() === "e" || e.charAt(0).toLowerCase() === "p" || e.charAt(0).toLowerCase() === "o") && i%2 == 0 && e.length > 5) {
    //     console.log(e.charAt(0).toLowerCase()+e.charAt(1).toUpperCase()+ e.substring(2, e.length-1) + e.charAt(e.length-1).toUpperCase());
    // }
    if ((e.charAt(0).toLowerCase() == "k" || e.charAt(0).toLowerCase() == "m" ||e.charAt(0).toLowerCase() == "f" || e.charAt(0).toLowerCase() == "y" || e.charAt(0).toLowerCase() == "n" || e.charAt(0).toLowerCase() == "a" || e.charAt(0).toLowerCase() == "e" || e.charAt(0).toLowerCase() == "o") && i%2 == 1 && e.length < 7) {
        
        boite.push(e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase());
        console.log(boite);
    }
});
console.log(boite.join(""));