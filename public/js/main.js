//Exo 1
// let prenom = "Andy";

// for (let i = 0; i <=5 ; i++) {
//     console.log(prenom,i);
// }

//Exo 2
// let tableau =["Andy","Anthony","Kev"];
// for (let i = 0; i < tableau.length; i++) {
//     console.log("Bonjour "+tableau[i]);
// }

//Exo melangés
//Exo1
// let nombre = +prompt('Tapez un nombre')
// for (let i = 0; i <=nombre ; i+=2) {
//     console.log(i);
// }

//Exo2
// let chiffre = prompt('Tapez un nombre maximal')
// for (let i = 0; i <=chiffre; i++) {
//     if (i% 2==0) {
//         console.log("Le nombre "+i+ " est paire");
//     } else{
//         console.log("Le nombre " +i+" est impaire");
//     }
// }

//Exo3
// let tab =["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta"];
// console.log(tab);
//let paire =[]
//let impaire =[]
// for (let i = 0; i < tab.length; i++) {
//     if(tab.indexOf(tab[i])%2==0){
//         console.log(tab[i]);
//     }
// }
//Avec forEach
// tab.forEach(element => {
//     if (tab.indexOf(element)%2==0) {
//      paire.push(element)  
//         console.log(element)
//     }else{
//      impaire.push(element)        
//}
// });

//Exo 4
//Partie 1
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loic"];

// eleves.forEach(element => {
// console.log(element); //2
// console.log(element.charAt(0))//3
// console.log(element[0]);//3- element[0] pas correct syntaxiquement
// console.log(element.charAt(1));//4
// console.log(element.charAt(1)+element);//5
//     if (eleves.indexOf(element) % 2 == 0) {
//         console.log(element);
//     } //bien mettre les parenthèses dans la condition !
// });
//Partie 2
// let eleves = ["alexis", "andy", "charles", "dorian", "farhad", "ilyas", "junior", "kev", "loic"];

// eleves.forEach(element => {
//Exo 2
// if (eleves.indexOf(element)%2==1) {
//     console.log(element.toUpperCase());
// } 
//Exo 3
// if (eleves.indexOf(element)%2==0) {
//     console.log(element[0].toUpperCase()+element.substr(1));
// }  
//Etape 1 met la première lettre de Chaque element puis y ignore une lettre de l'element en y "supprimant" la lettre à l'indice 1. 1ere Lettre en majuscule
//Exo 4
// if(eleves.indexOf(element)%2==1 && element.length>4)
// console.log(element); 
//Exo 5
// if (eleves.indexOf(element)%2==0 && element.length>4){
//     console.log(element.charat(0).toUpperCase());
// }
//Exo 6
// if (element[0]== "a"||element[0]== "e"||element[0]== "m"||element[0]== "m"||element[0]== "f"||element[0]== "y"||element[0]== "n" ) {
//     console.log(element);
// }
//Exo7
//     if (element[0]== "a"||element[0]== "e"||element[0]== "m"||element[0]== "m"||element[0]== "f"||element[0]== "y"||element[0]== "n"   ) {
//         if (element.length>5) {
//             console.log(element);
//         }
//     }
// });
//Partie 3
let eleves = ["alexis", "andy", "charles", "dorian", "farhad", "ilyas", "junior", "kev", "loic"];
// //2.1
eleves.forEach(element => {
            // if (element[0] == "a" || element[0] == "e" || element[0] == "m" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n") {
            //     if (element.length < 5) {
            //         console.log(element[0].toUpperCase()+element.slice(1))
            //     }
            // }
            //2.2
            // if (element[0] == "k" || element[0] == "c" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a"|| element[0] == "e"|| element[0] == "p"|| element[0] == "o"    ){
            //     if (element.length>4 && element%2==1) {
            //         console.log(element);
            //     }
            // } //Ici Rien ne s'affiche car aucun prenom ne respecte les conditions !
            //Exo 3
            //         if (element[0] == "k" || element[0] == "c" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a"|| element[0] == "e"|| element[0] == "p"|| element[0] == "o"    ){
            //             if (element.length>5 && element %2 ==0) {
            //                 console.log(element[1].toUpperCase()+element.slice(1,element.length-1))
            //             }
            //         } //??Ici Rien ne s'affiche car aucun prenom ne respecte les conditions !
            //Exo 4
            if (element[0] == "k" || element[0] == "c" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a"|| element[0] == "e"|| element[0] == "p"|| element[0] == "o"    ){
                if (element.length<7 && element%2==0) {
                    console.log(element[0].toUpperCase+element[1].toLowerCase);
                } //?? pas terminé
            }
            })
            
