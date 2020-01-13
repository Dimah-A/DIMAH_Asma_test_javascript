// 2. Le booleen
let maBoolean = true;

//3. L'array 
let test = "test"
let monArray = ["Hello", 5, test, {}]

//4. L'objet
let monObjet = {
    ville: "Bruxelles"
}

//5. Le string
let monString = "Ma chaine de caractère"

//6. L'integer
let monInt = 5

//7. L'objet et sa métode 
let perso = {
    nom: "",
    Ajout() {
        perso.nom = "DIMAH"
    }
}
perso.Ajout()
console.log(perso);

//8. La function
function multiplier(a, b) {
    if (b === undefined) {
        b = 1

    }
    return a * b
}
console.log(multiplier(5, 5));





//9. La condition

if (monInt < 8) {
    monInt == 8

}

console.log(monInt)

// props.age > 20 ? color = 'red' : color = '';

// est ce que l'age est plus grand que 20 ? si oui alors tu me le met en color: red sinon tu me met color qui me vaut rien






//10. La boucle

let maVariable = " Hello"
for (let i = 0; i < 9; i++) {
    console.log(i + maVariable);
}

//11. L'objet Date

var date = new Date();
console.log(date);


//12. string to STRING
// function motMaj(nom) {
//     nom = prompt("Comment t'appelles-tu ?");
//     alert(nom.toUpperCase())
// }
// motMaj()


//13. string to STRING




let nom = prompt("Comment t'appelles-tu ?");
alert(nom.substr(0,1).toUpperCase(0))
// Ca ne renvoi qu'une seule lettre ou est le reste du nom ??
//14.

//15.
let  alea =
function name(params) {
    
}