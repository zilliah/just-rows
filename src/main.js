import { deleteSavedCounters, getStoredCounters, saveCountersList, saveCurrCounter, switchCounter } from "./storage.js";
import { Counter } from "./counter.js";
import { showCurrCounter, showSavedCounters, clearSavedCounters } from "./page.js";

const counterContainer = document.querySelector(".counters-container");

//get current counter and add event listeners
const currCounterNode = document.querySelector(".curr");
//check for saved data
let currCounterData = JSON.parse(localStorage.getItem("curr-counter"));

// make a counter object for curr counter
//if there's saved data, use that

//if there's no saved data, start with default values
// all constructor params have default values


//add event listeners for edit, +/- in curr counter




//handle saved counters
//get "saved-counters" from local storage
//if they exist, list with their names and a 🗑 button
//add event listeners to:
//delete counter - incl confirmation modal
const deleteSavedBtn = document.querySelector("#delete-all")
deleteSavedBtn.addEventListener("click", deleteSavedCounters);
deleteSavedBtn.addEventListener("click", clearSavedCounters);


//open counter: switch into currCounter, push currCounter to start of saved array


// TMP TESTING
let testCurr = new Counter("counter 1", 7, 1, 4);
saveCurrCounter(testCurr);
showCurrCounter(testCurr);

let testArr = [];
for (let i = 0; i < 6; i++ ) {
    testArr.push(new Counter(`counter ${i + 2}`));
}
saveCountersList(testArr);
console.log(testArr);

// console.log(getStorage());
showSavedCounters(testArr);