//Générateur de nombre aléatoire
document.onload = addRandomNumbers((Math.random()*10).toFixed(3),(Math.random()*50).toFixed(3));
//Ajout de ces nombres et alert du résultat
function addRandomNumbers(nb1,nb2) {
  let result = Number(nb1) + Number(nb2);
  alert(nb1 + ' + ' + nb2 + ' = ' + result.toFixed(2));
}
