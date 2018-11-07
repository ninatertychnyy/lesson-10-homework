console.log('START FOR')
var myCurrentAge = 32;
for (var i = 3; i < myCurrentAge-1; i = i + 3) {
        console.log(' ', i);
    }

console.log('START WHILE DO')
var j = 3;
while (j < myCurrentAge-1) {
    console.log(' ', j);
    j = j + 3;
}

console.log('START DO WHILE')
var k = 3;
do {
console.log(' ', k);
    k = k + 3;
} while (k < myCurrentAge-1)

alert(myCurrentAge);
