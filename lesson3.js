// Задание 1

var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var i = 0;
while (i < a.length) {
  console.log(a[i++]);
if (i > 97)
break
}

//Задание 2-3

var basket_price = 0;
var Basket = [{name:'Собака', price:25}, {name:'Кошка', price:15}];
Basket.push({name:'Хомячок', price:5});
function countBasketPrice(x) {
    for (i=0; i<Basket.length; i++) { 
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}

// Задание 4

console.log("Ответ");
        
var i;
for (i = 0; i <= 9; i++) {
    console.log(i);
}

//Задание 5

console.log("Ответ");   
var arr = [];
var row = 0;
while (row < 20) {
row++;
arr.push('x');
console.log(arr);
}
