//  functions that respond directly to user actions / input
// mostly wrapper functions to streamline page and storage updates

import { Counter } from "./counter.js";
import { clearSavedCounters, showAllCounters, updateRowCount } from "./page.js";
import { deleteSavedCounters, getStoredCounters, saveCurrCounter, saveNewCurr } from "./storage.js";

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

export function resetCounter(counter) {
    counter.rowCount = 1;
    if (counter.repCount) counter.repCount = 1;
    updateAndSave(counter);
}

function updateAndSave (counter) {
    updateRowCount(counter);
    saveCurrCounter(counter);
}

// ----- editing panel -----

export function openEditor(editorNode, btnsNode) {
    editorNode.classList.remove("hidden");
    btnsNode.classList.add("hidden");
}
export function closeEditor(editorNode, btnsNode) {
    editorNode.classList.add("hidden");
    btnsNode.classList.remove("hidden");
}


export function removeRepeats(currCounter) {
    currCounter.repCount = null;
    currCounter.repLength = null;
    currCounter.repStartRow = 1;

    //update page
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

    //update on page
    showAllCounters(getStoredCounters());
}

export function addCounter() {
    //show edit dialogue (leave currentCounter) -> page.js

    //do i want to just enter name and need to click again for editing other input?

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