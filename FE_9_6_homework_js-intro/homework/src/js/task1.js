const money=parseFloat(prompt('Enter amount of money:'));
const discount=parseFloat(prompt('Enter discount:'));
let text;
let saved=money*(discount/100);
let minimize=money-saved;

if (money <=0 || discount >100){
  text='Invalid data';
}else{
  text='Price without discount: ' + +money.toFixed(2) +
       '\nDiscount: ' + +discount.toFixed(2) + '%' +
       '\nPrice with discount: ' + +minimize.toFixed(2) +
       '\nSaved: ' + +saved.toFixed(2);
}
console.log(text);