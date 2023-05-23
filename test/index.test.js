const { findYourCaterer } = require('./../src/index.js');
describe('findYourCaterer', () => {
  it('Should return -1 when the budget sended is 0 and the number of person is 1', () => {
    expect(findYourCaterer(0, 1)).toBe(-1);
  });

  it('Should return type 1 when the budget and people sended are 15 and 1 respectively ', () => {
    expect(findYourCaterer(15, 1)).toBe(1);
  });

  it('Should return type 2 when the budget and people sended are 20 and 1 respectively', () => {
    expect(findYourCaterer(20, 1)).toBe(2);
  });

  it('Should return type 3 when the budget and people sended are 30 and 1 respectively', () => {
    expect(findYourCaterer(30, 1)).toBe(3);
  });

  it('Should return type 3 taking into account a 20% discount when the number of people is equal to or greater than 60', ()=>{
    expect(findYourCaterer(1440, 60)).toBe(3)
  })
});
