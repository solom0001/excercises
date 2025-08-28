"strict";

function beregnMoms(myAmount, myMoms = 25) {
  let finalAmount = myAmount * (1 + myMoms / 100);

  console.log("Pris uden Moms:", myAmount);
  console.log("Pris med Moms:", finalAmount);
}

beregnMoms(100);
