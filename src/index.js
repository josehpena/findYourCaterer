const findYourCaterer = (budget, persons) => {
  if(budget / persons < 15) return -1;
  if(budget / persons >= 20) return 2 
    
  return 1;
}

module.exports = {
    findYourCaterer
}                        