let a = 7000;
let b = 10;
let c ;
let d ;

for (let i = 1; i <= b; i++ ){
  if(i < 5){
    continue
  }
  else{
    d = (a * i)* 0.2;
    c = (i / b) ;
    c += c;
  }
  console.log(`${c} kg konfet narxi ${d} so'm`)
}