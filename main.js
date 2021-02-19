var km = parseInt(prompt('Inserire numero di km che si intende percorrere'));
console.log('km = ' + km);

var age = parseInt(prompt('Inserire la propria età'));
console.log('age = ' + age);

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

