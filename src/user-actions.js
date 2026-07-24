//  functions that respond directly to user actions / input
// mostly wrapper functions to streamline page and storage updates

import { Counter } from "./counter.js";
import { clearSavedCounters, showAllCounters, updateRowCount } from "./page.js";
import { deleteSavedCounters, getStoredCounters, makeDefaultCounter, saveAllCounters, saveCurrCounter, saveNewCurr } from "./storage.js";

// ----- within current counter -----
// don't need input -> always retrieve and use most recent storage value
// otherwise it does weird counting errors
export function plusRow() {
    let counter = getStoredCounters().currCounter;
    counter.addRow();
    updateAndSave(counter);
}

export function minusRow() {
    let counter = getStoredCounters().currCounter;
    counter.subtractRow();
    updateAndSave(counter);
}

export function resetCounter() {
    let counter = getStoredCounters().currCounter;
    counter.rowCount = 1;
    if (counter.repCount) counter.repCount = 1;
    updateAndSave(counter);
}

function updateAndSave (counter) {
    saveCurrCounter(counter);
    updateRowCount();
}

// ----- editing panel -----

export function openEditor(mode) {
    const editorNode = document.querySelector("#editor");
    const btnsNode = document.querySelector("#add-counter");
    editorNode.classList.remove("hidden");
    btnsNode.classList.add("hidden");

    //mode can be "edit" or "create"
    //different things will happen depending
    if (mode === "edit") {

    } else if (mode === "create") {

    } else throw new Error("Incorrect mode to open the editor");
}
export function closeEditor() {
    const editorNode = document.querySelector("#editor");
    const btnsNode = document.querySelector("#add-counter");
    editorNode.classList.add("hidden");
    btnsNode.classList.remove("hidden");
}


export function removeRepeats(currCounter) {
    currCounter.repCount = null;
    currCounter.repLength = null;
    currCounter.repStartRow = 1;

    //update page
    //TODO
}


export function deleteCurrCounter() {
    let stored = getStoredCounters();
    if (stored.savedCounters) {
        let newCurr = stored.savedCounters.shift();
        saveAllCounters(newCurr, stored.savedCounters);
        //shift off the first one, save updated both
    } else saveCurrCounter(makeDefaultCounter());

    
    closeEditor();
    showAllCounters();
}


// ----- adding/removing counters -----
const maxCounters = 500;

//quick add default counter
//move prev to storage
export function addQuickCounter() {
    let stored = getStoredCounters();
    if (stored.savedCounters && stored.savedCounters.length > maxCounters) {
        alert("You have too many counters. Time to clean them up!");
        return;
    }
    let name = stored.savedCounters ? `Counter ${stored.savedCounters.length + 2}` : "Counter 2";
    const newCurr = new Counter(name);  //TODO validate unique name
    saveNewCurr(newCurr);
    showAllCounters();
}

export function addCounter() {
    //show edit dialogue (leave currentCounter) -> page.js

    //need to handle action buttons differently for this one
}


//replaces curr counter
//curr must be unshifted into start of saved counters
//page and storage both update
export function expandCounter(button) {
    //find and extract selected counter from saved-counters
    //add current counter to start of saved-counters
    //return new saved counters to storage

    //save selected counter as curr-counter
    //display counts on page


}

export function deleteOneSavedCounter(counter) {
    //find selected counter in saved-counters
    //remove, save updated saved-counters
    //switchCounter -> storage.js

    //update list of saved counters on page
}

export function deleteAllSavedCounters() {
    if (localStorage.getItem("saved-counters")) {
        confirm("Delete all saved counters? This cannot be undone.");
        deleteSavedCounters();
        clearSavedCounters();
    } else alert("No saved counters to delete.");
}