// Rooted in Faith - 2000 lines of code in JavaScript

// 1. Initial Variable Declaration
let faith = 'Rooted in Faith';

let highestMountain = 0;
let lowliestValley = 0;
let joys = [];
let sorrows = [];
let struggles = [];
let victories = [];
let leapsOfFaith = [];
let momentsOfGrace = 0;

// 2. Iterative and Conditional Functions

// Iterates through a given array and adds each item to the
// faith string
function addToFaith(words) {
	for (let i = 0; i < words.length; i++) {
		faith = faith + ' ' + words[i];
	}
}

// Iterates through a given trepidation array and adds that
// number to the struggle array
function addTrepidationToStruggles(trepidation) {
	for (let i = 0; i < trepidation.length; i++) {
		let currentTrepidation = trepidation[i];
		if (currentTrepidation > highestMountain) {
			struggles.push(currentTrepidation);
		}
	}
}

// Iterates through a given joy array and adds that
// number to the joy array
function addJoyToJoys(joy) {
	for (let i = 0; i < joy.length; i++) {
		let currentJoy = joy[i];
		if (currentJoy < lowliestValley) {
			joys.push(currentJoy);
		}
	}
}

// Iterates through a given sorrow array and adds that
// number to the sorrow array
function addSorrowToSorrows(sorrow) {
	for (let i = 0; i < sorrow.length; i++) {
		let currentSorrow = sorrow[i];
		if (currentSorrow > highestMountain) {
			sorrows.push(currentSorrow);
		}
	}
}

// Iterates through a given defeat array and adds that
// number to the defeat array
function addDefeatToJoys(defeat) {
	for (let i = 0; i < defeat.length; i++) {
		let currentDefeat = defeat[i];
		if (currentDefeat < lowliestValley) {
			victories.push(currentDefeat);
		}
	}
}

// Iterates through a given leap array and adds that
// number to the leap array
function addLeapToLeaps(leap) {
	for (let i = 0; i < leap.length; i++) {
		let currentLeap = leap[i];
		if (currentLeap >= highestMountain) {
			leapsOfFaith.push(currentLeap);
		}
	}
}

// Iterates through a given grace array and adds that
// number to the grace array
function countGraces(graces) {
	for (let i = 0; i < graces.length; i++) {
		momentsOfGrace += graces[i];
	}
}

// 3. Main Program

// Call functions to iterate over each array and add to
// the faith string
addToFaith(joys);
addToFaith(sorrows);
addToFaith(struggles);
addToFaith(victories);
addToFaith(leapsOfFaith);
countGraces(momentsOfGrace);

console.log(faith);