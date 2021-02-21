const notValid = Error('Valore non valido');

var km = prompt('Inserire numero di km che si intende percorrere');
// bonus
if (parseInt(km) != km) {
  alert('Valore non valido');
  throw 'Valore non valido';
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
  throw 'Valore non valido';
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
document.getElementById('noDiscount').innerHTML = discount0 + ' €';

if (age < 18) {
  var discount20 = 0.8 * discount0;
  document.getElementById('yesDiscount').innerHTML = discount20 + ' €';
}
else if (age > 65) {
  var discount40 = 0.6 * discount0;
  document.getElementById('yesDiscount').innerHTML = discount40 + ' €';
}
else {
  document.getElementById('yesDiscount').innerHTML = discount0 + ' €';
}

// bonus


