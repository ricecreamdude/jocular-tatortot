'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

assert(1 === 1, '1 equals 1 - this assert will pass.');
assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');

/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

//your code goes here

assert('zoo' === 'zoo', 'The zoo is a zoo... this will return undefined.');
assert('monkeys' === 'apes', 'Monkeys are NOT apes!');

/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';
/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

var array1 = sentence1.split(' ');
var arr1 = [];

for (var i = 0; i < array1.length; i++) {

	if (i === array1.length - 1) {

		arr1[i] = 'chirp.';

	} else {

		arr1[i] = 'chirp';

	}
}

//Answer1
sentence1 = arr.join(' ');

// your code goes here

// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

// your code goes here
var sentence2 = 'Come over here so you can scratch my belly.';

var arr2 = sentence2.split(' ');
var i = 0;

while (i < arr2.length) {

	if (i === arr2.length - 1) {
		arr2[i] = 'chirp.';
	} else {
		arr2[i] = 'chirp';
	}

	i++;
}

//Answer 2
sentence2 = arr.join(' ');

// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (12 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

// your code goes here

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;

var ranNum4 = Math.random() * 4;

nextAnimal = favoriteAnimals[Math.floor(ranNum4)];

console.log(favoriteAnimals[Math.floor(ranNum4)]);

assert(nextAnimal, 'assign something to nextAnimal');

/* ===================================================================
----------------- Hungry Lion (20 points) ----------------------------
======================================================================
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

// your code goes here

var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var totalMeals = 0;

var tooHungryDay, averageMeals;

for (var i = 0; i < mealsPerDay.length; i++) {

	//Total for day i (and all previous days)
	totalMeals += mealsPerDay[i];

	//Average for day i
	averageMeals = totalMeals / (i + 1);

	console.log ('Day ' + (i + 1) + '   Total Meals: ' + totalMeals + '  Average Meals: ' + averageMeals);

	// Check to see if meals is under 4
	if (averageMeals < 4) {
		console.log('Dude have you seen Jeff?');
		tooHungryDay = i + 1;
    break;
  }
}

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');

/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
