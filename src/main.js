import { showCurrCounter, showSavedCounters } from "./page.js";
import { getStoredCounters } from "./storage.js";
import { closeEditor, deleteAllSavedCounters, minusRow, openEditor, plusRow, resetCounter } from "./user-actions.js";

const counterContainer = document.querySelector(".counters-container");

let stored = getStoredCounters(); 
// { currCounter:n, savedCounters:m}

// initial screen update with saved data
console.log("Retrieved this stored data:");
console.log(stored);
showCurrCounter(stored.currCounter);
showSavedCounters(stored.savedCounters);
if (stored.currCounter.repLength) {
    document.querySelectorAll(".rep-count").forEach(n => n.classList.remove("hidden"))};


//adding and subtracting buttons
document.querySelector("#plus").addEventListener("click", () => plusRow(stored.currCounter));
document.querySelector("#minus").addEventListener("click", () => minusRow(stored.currCounter));

//reset button
document.querySelector("#reset").addEventListener("click", () => resetCounter(stored.currCounter));


//delete all counters
// TODO add confirmation modal
const deleteSavedBtn = document.querySelector("#delete-all");
deleteSavedBtn.addEventListener("click", deleteAllSavedCounters);

//saved counter delete buttons


// ----------- Editor ------------------
const editorNode = document.querySelector("#editor");
const editBtnsNode = document.querySelector("#add-counter");

//open the editor for both edit and create new (nothing else changes until saved)
document.querySelector("#quick-add").addEventListener("click", e => {
    //TODO - mostly in user-actions
    // create new default, becomes curr
    // prev curr gets pushed to saved array
    //update on page
});

//these can leave as is, nothing else happens with these until saved
document.querySelector("#full-add").addEventListener("click", e => openEditor(editorNode, editBtnsNode));
document.querySelector("#start-edit").addEventListener("click", e => openEditor(editorNode, editBtnsNode));

// save stuff from input (this will be a lot more, but will probs have wrapper fxns in user-actions, etc)
document.querySelectorAll(".save").forEach(n => {
    n.addEventListener("click", e => {
        closeEditor(editorNode, editBtnsNode);
    });
});


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
