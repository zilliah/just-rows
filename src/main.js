import { showCurrCounter, showSavedCounters } from "./page.js";
import { getStoredCounters } from "./storage.js";
import { addQuickCounter, closeEditor, deleteAllSavedCounters, minusRow, openEditor, plusRow, resetCounter } from "./user-actions.js";

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
document.querySelector("#quick-add").addEventListener("click", addQuickCounter);


//these can leave as is, nothing else happens with these until saved
document.querySelector("#full-add").addEventListener("click", e => openEditor(editorNode, editBtnsNode));
document.querySelector("#start-edit").addEventListener("click", e => openEditor(editorNode, editBtnsNode));

// save input
// (this will be a lot more, but will probs have wrapper fxns in user-actions, etc)
//will need to do different things depending on if it's
document.querySelectorAll(".save").forEach(n => {
    n.addEventListener("click", e => {
        closeEditor(editorNode, editBtnsNode);
        console.log("counter saved");
    });
});
