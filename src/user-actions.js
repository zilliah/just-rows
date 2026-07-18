//  functions that respond directly to user actions / input

import { updateRowCount } from "./page.js";
import { saveCurrCounter } from "./storage.js";

// ----- within current counter -----
export function plusRow(counter) {
    counter.addRow();
    updateRowCount(counter);
    saveCurrCounter(counter);
}

export function minusRow(counter) {
    counter.subtractRow();
    updateRowCount(counter);
    saveCurrCounter(counter);
}

export function resetCounter(currCounter) {
    currCounter.rowCount = 0;
    if (currCounter.repCount) currCounter.repCount = 0;

}

// ----- editing panel -----
export function editCurrCounter() {
    //just opens the edit form

    //display edit dialogue, hide current counter -> page.js
    
}

export function saveCounterEdits() {
    //save input to storage -> storage.js
    //display updated counter on page -> page.js

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