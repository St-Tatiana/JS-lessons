// Задание 1

console.log('Ответ');
        
var max = 999;
var digit = {
  number: Math.round(Math.random() * max),
  units: 0,
  tens: 0,
  hundreds: 0,
};
var input = prompt('Введите число от 0 до 999');

if (digit.number <= 9){
  digit.units = digit.number;
} else if (digit.number <= 999){
  digit.units = Math.floor(digit.number % 10);
  digit.tens = Math.floor(digit.number / 10 % 10);
  digit.hundreds = Math.floor(digit.number / 100 % 10);
}else {
    digit.number = 0;
    console.log('Вы ввели число, не входящее в диапазон от 0 до 999');
}
console.log(digit);

// Задание 2
var product = [
    {
        name: 'Собака',
        price: 25,
        isavailable: true,
        instockquantity: 200
    },
    {
        name: 'Кошка',
        price: 15,
        isavailable: true,
        instockquantity: 100
    },
    {
        name: 'Хомячок',
        price: 5,
        isavailable: true,
        instockquantity: 500 
    }
]
var basket_price = 0;

var Basket = [{name:'Собака', price:25, quantity:1, total: totalSum},
 {name:'Кошка', price:15, quantity:1, total: totalSum}];

function addToBasket(product, name, price, quantity) {
product.push({
    name: 'Хомячок',
    price: 5,
    quantity: 2,
    total: totalSum
})
}
function totalSum(price, quantity) {
    return this.price*this.quantity;
}
function countBasketPrice(x) {
    for (i=0; i<Basket.length; i++) { 
        basket_price = basket_price + Basket[i].total;
    }
    return basket_price;
}