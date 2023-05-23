const findYourCaterer = (budget, persons) => {
  var amountByPerson = budget / persons; //24
  let luxuryPrice = 30;
  if(persons >= 60) luxuryPrice = 24;
  if(amountByPerson < 15) return -1;
  if(amountByPerson >= 20 && amountByPerson < luxuryPrice) return 2;
  if(amountByPerson >= luxuryPrice) return 3;
  return 1;
}

module.exports = {
    findYourCaterer
}                        