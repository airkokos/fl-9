const a=parseFloat(prompt('Enter length a:'));
const b=parseFloat(prompt('Enter length b:'));
const angle=parseFloat(prompt('Enter angle:'));
let angleSum=180;
let alpha= Math.PI / angleSum * angle;
let text;

let c=Math.sqrt(a*a + b*b - 2*a*b*Math.cos(alpha));
let perimeter=a + b + c;
let p=perimeter/2;
let square= Math.sqrt(p*(p-a)*(p-b)*(p-c));

if (a<0 || b<0) {
    text='Invalid data';
} else {
    text='c length: ' + +c.toFixed(2) +
     '\nTriangle square: ' + +square.toFixed(2) +
     '\nTriangle perimeter: ' +perimeter.toFixed(2);
}
console.log(text);