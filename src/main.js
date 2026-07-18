import { makeDefaultCounter, deleteSavedCounters, getStoredCounters, saveCountersList, saveCurrCounter, switchCounter } from "./storage.js";
import { Counter } from "./counter.js";
import { showCurrCounter, showSavedCounters, clearSavedCounters  } from "./page.js";
import { minusRow, plusRow } from "./user-actions.js";

const counterContainer = document.querySelector(".counters-container");

let stored = getStoredCounters(); 
// { currCounter:n, savedCounters:m}

console.log("Retrieved this stored data:");
console.log(stored);


//check for saved counters, create a default counter if not
if (stored.currCounter) showCurrCounter(stored.currCounter);
if (stored.savedCounters) showSavedCounters(stored.savedCounters);
else if (!stored.currCounter) {
    console.log("no saved counters found, starting with default counter");
    stored.currCounter = makeDefaultCounter();
    console.log("new counter added:");
    console.log(stored);
}

let currCounter = stored.currCounter;

//add listeners for adding and subtracting rows
document.querySelector("#plus").addEventListener("click", () => plusRow(currCounter));
document.querySelector("#minus").addEventListener("click", () => minusRow(currCounter));


//delete all counters
// TODO add confirmation modal
const deleteSavedBtn = document.querySelector("#delete-all")
deleteSavedBtn.addEventListener("click", deleteSavedCounters);
deleteSavedBtn.addEventListener("click", clearSavedCounters);


//open counter: switch into currCounter, push currCounter to start of saved array

//delete saved counter buttons


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
