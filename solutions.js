/*
Pete, The Baker ---Kata Level 5

Instructions: Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be 
considered as 0.

Examples:
-----------------------------------------------------------------------------------------------------------
must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/


//Solution
function cakes(recipe, available, numOfCakes = 0) {
    for (item in recipe) {
        if (available[item] - recipe[item] < 0 || !available[item]) {
            return numOfCakes;
        }
        available[item] -= recipe[item]
    }

    numOfCakes++;
    return cakes(recipe, available, numOfCakes++);

}


/* 
MUMBLING -- Kata Level 7

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


//Solution
function accum(s) {
    let arr = s.split("")
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].repeat(i + 1)
        let all = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        newArr.push(all)
    }
    return newArr.join("-")
}


/* Take a Ten Minute Walk -- Kata Level 6

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block in a direction and you know it takes you one minute 
to traverse one city block, so create a function that will return true if the walk the 
app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of 
direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty 
array (that's not a walk, that's standing still!).
*/

//Solution

function isValidWalk(walk) {
    let distance = 0;

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': distance++; break;
            case 'e': distance++; break;
            case 's': distance--; break;
            case 'w': distance--; break;


        }
    }
    if (distance == 0 && walk.length == 10) {
        return true;
    } else
        return false;
}


/* Multiples of 3 or 5 --Kata Level 6

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//Solution

function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }

    }
    return sum
}



/* Vowel Count -- Kata Level 7
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

//Solution
function getCount(str) {
    let m = str.match(/[aeiou]/gi)
    return m.length
}