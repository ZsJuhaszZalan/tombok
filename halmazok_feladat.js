let halmazA = new Set();
let halmazB = new Set();

for (let index = 0; index <= 20; index++) {
    halmazA.add(Math.floor(Math.random()*100) +1);
    halmazB.add(Math.floor(Math.random()*100) +1);
}

console.log(halmazA.difference(halmazB))
console.log(halmazA.intersection(halmazB))