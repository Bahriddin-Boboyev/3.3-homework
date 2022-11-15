let a = 7;

for (let i = 1; i <= a; i++){
  if(i == 1){
    console.log(`Haftaning ${i} -kuni Dushanba`);
  }
  else if(i == 2){
    console.log(`Haftaning ${i} -kuni Seshanba`);
  }
  else if (i == 3){
    console.log(`Haftaning ${i} -kuni Chorshanba`);
  }
  else if (i == 4){
    console.log(`Haftaning ${i} -kuni Payshanba`);
  }
  else if (i == 5){
    console.log(`Haftaning ${i} -kuni Juma`);
  }
  else if (i == 6){
    console.log(`Haftaning ${i} -kuni Shanba`);
  }
  else{
    console.log(`Haftaning ${i} -kuni Yakshanba`);
  }
}