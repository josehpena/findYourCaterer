const findYourCaterer = (budget, persons) => {
  var amountByPerson = budget / persons;
  var BASIC_BUFFET_PRICE = 15
  var ECONOMIC_BUFFET_PRICE = 20
  let PREMIUM_BUFFET_PRICE = 30;
  if(persons >= 60) PREMIUM_BUFFET_PRICE = 24;
  if(amountByPerson < BASIC_BUFFET_PRICE) return -1;
  if(amountByPerson >= ECONOMIC_BUFFET_PRICE && amountByPerson < PREMIUM_BUFFET_PRICE) return 2;
  if(amountByPerson >= PREMIUM_BUFFET_PRICE) return 3;
  return 1;
}

module.exports = {
    findYourCaterer
}                        