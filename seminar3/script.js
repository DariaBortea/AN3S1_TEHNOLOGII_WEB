alert("Bunaziua");
console.log("sanatate numai bile");

alert("Bunaziua");
console.log("sanatate numai bile");

function filtreazaNumereMari() {
  const numere = [7, 12, 9, 15, 27];
  const rezultatulFinal = numere
    .filter(numar => numar > 10)        
    .map(numar => numar * numar);      
    
  return rezultatulFinal;
}

const rezultatul = filtreazaNumereMari();

console.log(rezultatul); 