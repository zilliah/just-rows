// handles counter functions which relate to localStorage

import { Counter } from "./counter.js";

//created default counter for first time users
export function makeDefaultCounter() {
    let defaultCounter = new Counter("Default Counter");
    saveCurrCounter(defaultCounter);
    return defaultCounter;
}

//get and parse items from localStorage
export function getStoredCounters() {
    const counterObj = { 
        currCounter: JSON.parse(localStorage.getItem("curr-counter")),
        savedCounters: JSON.parse(localStorage.getItem("saved-counters"))
    }

    function convertToCounter(obj) {
        return new Counter(obj.name, obj.rowCount, obj.repCount, obj.repLength, obj.repStartRow, obj.node);
    }

    const convertedSavedCounters = counterObj.savedCounters ? (counterObj.savedCounters).forEach(obj => convertToCounter(obj)) : null;

    return {
        currCounter: convertToCounter(counterObj.currCounter),
        savedCounters: convertedSavedCounters
    };

}



//save currCounter data to local storage:
//currCounter saved w/ each +/-, saved edit
export function saveCurrCounter(counter) {
    localStorage.setItem("curr-counter", JSON.stringify(counter));
}

export function saveCountersList(arr) {
    localStorage.setItem("saved-counters", JSON.stringify(arr));
}

//user adds new counter
//new counter is set as currCounter
//oldCounter is added to start of savedArray
//localStorage is updated

//switch counters:
//new counter, selected by name/position, is moved to currCounter
//prevCounter is unshift() to saved counters array (so shows at top)
//return updated saved array
//new/old counters are relative to being currCounter
export function switchCounter(newCounter, oldCounter, savedCountersArray) {
    //remove old counter from array
    let i = savedCountersArray.find(c => c.name === newCounter.name)
    let newSavedCountersArray = splice(0, i).concat(splice(i, savedCountersArray.length));

    
    //add new counter to start of array
    return newSavedCountersArray.unshift(oldCounter);
}

export function deleteSavedCounters() {
    localStorage.removeItem("saved-counters");
}