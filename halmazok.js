let betuk = new Set(['a', 'b', 'c', 'd']); 
for (let elem of betuk) { 
    console.log(elem); 
   }

betuk.add('e');
for (let elem of betuk) { 
    console.log(elem); 
   }

let fBetu = 'f'
betuk.add(fBetu)

for (let elem of betuk) { 
    console.log(elem); 
   }

//has
cBetu = 'c'
if (betuk.has(cBetu)){
    console.log(`Ez az ${cBetu} elem a halmazban van!`)
}

// delete
betuk.delete("e")
for (let elem of betuk) { 
    console.log(elem); 
   }

// values
let interator = betuk.values();
console.log(interator)