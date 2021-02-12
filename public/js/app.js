// Resultat
let resultat = document.querySelector(`.resultat`)
let p = document.querySelector(`p`)

// Egal
let egal = document.querySelector(`.egal`)

// Tout les bouttons
let button = document.querySelectorAll(`button`)

// ------------------------------------------------------------------------------------------------------- //
var stackDonneePremiere = ``
var stackDonneeSysteme = ``
var stackDonneeDeuxieme = ``
var stackDonneeApplication

let fonctionCalcul = (x,y,z) => {
    x = parseInt(stackDonneePremiere)
    y = stackDonneeSysteme
    z = parseInt(stackDonneeDeuxieme)

    switch (y) {
        case `+`:
            stackDonneeApplication = x + z
            break;
    
        case `-` :
            stackDonneeApplication = x - z
            break;

        case `x` :
            stackDonneeApplication = x * z
            break;

        case `/` :
            stackDonneeApplication = x / z
            break;
    }
    return stackDonneeApplication
}

button.forEach( element => {
    element.addEventListener(`click` , () => {
        if ( !isNaN(element.value) ) {
            if (stackDonneeSysteme == ``) {
                stackDonneePremiere += element.innerHTML
                p.innerHTML += element.innerHTML
                console.log(stackDonneePremiere);
            } else {
                stackDonneeDeuxieme += element.innerHTML
                p.innerHTML += element.innerHTML
                console.log(stackDonneeDeuxieme);
            }
        } else {
            if (element.value == `=`) {
                if (stackDonneeSysteme != `` && stackDonneePremiere != `` && stackDonneeDeuxieme != ``) {
                    p.innerHTML = fonctionCalcul(stackDonneePremiere,stackDonneeSysteme,stackDonneeDeuxieme)
                }
            } else if (element.value == `clear`){
                stackDonneePremiere = ``
                stackDonneeDeuxieme = ``
                stackDonneeSysteme = ``
                stackDonneeApplication = ``
                p.innerHTML = ``
            } else {
                stackDonneeSysteme += element.innerHTML
                p.innerHTML += element.innerHTML
                console.log(stackDonneeSysteme);
            }
        }
    })

});