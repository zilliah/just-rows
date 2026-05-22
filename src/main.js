import { deleteSavedCounters, getStoredCounters, saveCountersList, saveCurrCounter, switchCounter } from "./storage.js";
import { Counter } from "./counter.js";
import { showCurrCounter, showSavedCounters, clearSavedCounters,  } from "./page.js";

const counterContainer = document.querySelector(".counters-container");

let stored = getStoredCounters();
console.log("Retrieved this stored data:");
console.log(stored);

if (stored.currCounter) {
    showCurrCounter(stored.currCounter);
    showSavedCounters(stored.savedCounters);
} else {
    console.log("no saved counters found, starting with default counter");
}


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
