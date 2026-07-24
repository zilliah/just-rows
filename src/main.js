import { showCurrCounter, showSavedCounters } from "./page.js";
import { getStoredCounters } from "./storage.js";
import { addQuickCounter, closeEditor, deleteAllSavedCounters, deleteCurrCounter, minusRow, openEditor, plusRow, resetCounter } from "./user-actions.js";

const counterContainer = document.querySelector(".counters-container");

let stored = getStoredCounters(); 
// { currCounter:n, savedCounters:m}

// initial screen update with saved data
console.log("Retrieved this stored data:");
console.log(stored);
showCurrCounter();
showSavedCounters();
if (stored.currCounter.repLength) {
    document.querySelectorAll(".rep-count").forEach(n => n.classList.remove("hidden"))};


//adding and subtracting buttons
document.querySelector("#plus").addEventListener("click", plusRow);
document.querySelector("#minus").addEventListener("click", minusRow);

//reset button
document.querySelector("#reset").addEventListener("click", () => resetCounter(stored.currCounter));


//delete all counters
// TODO add confirmation modal
const deleteSavedBtn = document.querySelector("#delete-all");
deleteSavedBtn.addEventListener("click", deleteAllSavedCounters);

//saved counter delete buttons


// ----------- Editor ------------------
// add default counter
document.querySelector("#quick-add").addEventListener("click", addQuickCounter);

// open editor
document.querySelector("#full-add").addEventListener("click", e => openEditor("create"));
document.querySelector("#start-edit").addEventListener("click", e => openEditor("edit"));

// close editor
document.querySelector("#delete-curr").addEventListener("click", e => {
    e.preventDefault();
    deleteCurrCounter();
});
document.querySelector("#cancel-edit").addEventListener("click", e => {
    e.preventDefault();
    closeEditor();
});

// save input
// (this will be a lot more, but will probs have wrapper fxns in user-actions, etc)
//different actions for edit vs create, think about how to handle this
document.querySelectorAll(".save-edit").forEach(n => {
    n.addEventListener("click", e => {
        e.preventDefault();
        closeEditor();
        console.log("counter saved");
    });
});
