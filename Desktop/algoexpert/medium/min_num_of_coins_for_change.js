//Min Number of Coins for Change
//Dynamic Programmingå

//my notes
//we get two inputs
//one is an integer value of the amount of money
//the other input is an array of integer values that represent coin denomination
//$6 [1,2,4] --> 2 is the solution (4 + 2)
//minimum amount of coins we need to reach $6
//we are going to build this problem up
//we will build an array of length 7, 6 + 1
//at idx 0 we have $0, idx 1 we have $1, idx 2 we have $2, idx 3 we have $3 and so on
//we will figure out what is the min num of coins we need for each idx
//$0 we need 0 coins so we have 0 on idx 0
//$1, is 1 <= 1, yes it is so there is at-least 1 way to get to that
//$2, is 1 <= 2, yes 2-1 = 1 coin here, and one coin already and we get 1 + 1 = 2 at idx2
//the list goes on