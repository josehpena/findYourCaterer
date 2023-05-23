You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

Number of orders is always equal to number of people.

For example,

budget, people => (150, 9) will return 1.

budget, people => (200, 9) will return 2.

budget, people => (300, 9) will return 3 and so on.

budget, people => (900, 60) will return 1

budget, people => (1200, 60) will return 2

budget, people => (1440, 60) will return 3

## Pomodoro 1

# Should return -1 when the budget sended is 0 and the number of person is 1. OK
# Should return type 1 when the budget and people sended are 15 and 1 respectively  OK

## Pomodoro 2

# Should return type 2 when the budget and people sended are 20 and 1 respectively OK
# Should return type 3 when the budget and people sended are 30 and 1 respectively
# should return type 3 taking into account a 20% discount when the number of people is equal to or greater than 60
