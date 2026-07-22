import { clearSavedCounters, showCurrCounter, showSavedCounters } from "./page.js";
import { deleteSavedCounters, getStoredCounters } from "./storage.js";
import { minusRow, plusRow, resetCounter } from "./user-actions.js";

const counterContainer = document.querySelector(".counters-container");

let stored = getStoredCounters(); 
// { currCounter:n, savedCounters:m}


console.log("Retrieved this stored data:");
console.log(stored);


// UPDATE DISPLAY with saved data
showCurrCounter(stored.currCounter);
showSavedCounters(stored.savedCounters);
if (stored.currCounter.repLength) {
    document.querySelectorAll(".rep-count").forEach(n => n.classList.remove("hidden"))};


//add listeners for adding and subtracting rows
document.querySelector("#plus").addEventListener("click", () => plusRow(stored.currCounter));
document.querySelector("#minus").addEventListener("click", () => minusRow(stored.currCounter));

//reset and edit buttons listeners
document.querySelector("#reset").addEventListener("click", () => resetCounter(stored.currCounter));
document.querySelector("#start-edit").addEventListener("click", () => console.log("starting edit"));


//delete all counters
// TODO add confirmation modal
const deleteSavedBtn = document.querySelector("#delete-all")
deleteSavedBtn.addEventListener("click", deleteSavedCounters);
deleteSavedBtn.addEventListener("click", clearSavedCounters);


//open counter: switch into currCounter, push currCounter to start of saved array

//saved counter delete buttons


// TMP TESTING
// let testCurr = new Counter("counter 1", 7, 1, 4);
// saveCurrCounter(testCurr);
// showCurrCounter(testCurr);

// let testArr = [];
// for (let i = 0; i < 6; i++ ) {
//     testArr.push(new Counter(`counter ${i + 2}`));
// }
// saveCountersList(testArr);
// // console.log(testArr);

// // console.log(getStorage());
// showSavedCounters(testArr);

// let testArr2 = [];
// for (let i = 2; i < 8; i++ ) {
//     testArr.push(new Counter(`bountery ${i}`));
// }
