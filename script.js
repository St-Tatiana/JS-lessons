// Задание 3

var a = 16
var b = 8

if (a > 0 && b > 0) {
    alert(a+b)
}
else if (a < 0 && b < 0) {
    alert(a*b)
}
else {
    alert(a+b)
}

// Задание 4

function range(a, str = '') {
    switch(true) {
        case (a <= 15):
            str += a + '' + range(a+1)
            break;
        default:
            return str    
    }
}

// Задание 5

function sum(a,b) {
    return a+b
}
function diff(a,b) {
    return a-b
}
function mult(a,b) {
    return a*b
}
function div(a,b) {
    return a/b
}