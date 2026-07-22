//  functions that respond directly to user actions / input
// mostly wrapper functions to streamline page and storage updates

import { updateRowCount } from "./page.js";
import { saveCurrCounter } from "./storage.js";

// ----- within current counter -----
export function plusRow(counter) {
    counter.addRow();
    updateAndSave(counter);
}

export function minusRow(counter) {
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

export function addCounter() {
    //show edit dialogue (leave currentCounter) -> page.js

    //do i want to just enter name and need to click again for editing other input?

    //need to handle action buttons differently for this one
}


//replaces curr counter
//curr must be pushed into start of saved counters
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

export function deleteAllSavedCounters(counter) {
    //deleteSavedCounters -> storage.js
    //clearSavedCounters -> page.js
}