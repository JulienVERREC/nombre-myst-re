var solution = Math.floor(Math.random()*4);
console.log(solution);

for (var i = 0; i < 3; i++) {

var response = prompt("choisir un chiffre entre 0 et 3");
console.log(response);

    if (response > solution){
    alert("Nombre trop grand!");
    }
    else if (response < solution){
    alert("Nombre trop petit!");
    }
    else if ( i > 3 ){
    alert("vous avez perdu...");
    }
    else{
    alert("GAGNÉ!!!");break;	
    }

}
    