var km = prompt('Inserire numero di km che si intende percorrere');
// bonus
if (parseInt(km) != km) {
  alert('Valore non valido');
  throw 'invalid value';
}
// /bonus
// bonus possibilità 2
// while (parseInt(km) != km) {
//   alert('Valore non valido');
//   var km = prompt('Inserire numero di km che si intende percorrere');
// }
// /bonus possibilità 2
console.log('km = ' + km);
console.log(typeof km);

var age = prompt('Inserire la propria età');
// bonus
if (parseInt(age) != age) {
  alert('Valore non valido');
  throw 'invalid value';
}
// /bonus
// bonus possibilità 2
// while (parseInt(age) != age) {
//   alert('Valore non valido');
//   var age = prompt('Inserire la propria età');
// }
// /bonus possibilità 2
console.log('age = ' + age);
console.log(typeof age);

var discount0 = 0.21 * km;
console.log('whole price = ' + discount0);
document.getElementById('noDiscount').innerHTML = discount0.toFixed(2) + ' €';
// nb: ho visualizzato il valore arrotondato ma questo non coincide con il valore reale che mi serve per gli eventuali calcoli successivi. non posso arrotondare subito perchè rischio di propagare un errore. una volta finiti i calcoli faccio coincidere il valore arrotondato col valore effettivo della variabile.

if (age < 18) {
  var discount20 = 0.8 * discount0;
  var discount20 = discount20.toFixed(2);
  document.getElementById('yesDiscount').innerHTML = discount20 + ' €';
}
else if (age > 65) {
  var discount40 = 0.6 * discount0;
  var discount40 = discount40.toFixed(2);
  document.getElementById('yesDiscount').innerHTML = discount40 + ' €';
}
else {
  var discount0 = discount0.toFixed(2);
  document.getElementById('yesDiscount').innerHTML = discount0 + ' €';
}


