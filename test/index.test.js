const { findYourCaterer } = require('./../src/index.js');

describe('findYourCaterer', () => {
    it('Should return -1 when the budget sended is 0 and the number of person is 1', () => {
        expect(findYourCaterer(0,1)).toBe(-1);
    });
});
