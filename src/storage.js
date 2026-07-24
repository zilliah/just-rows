// handles counter functions which relate to localStorage

import { Counter } from "./counter.js";

//created default counter for first time users
export function makeDefaultCounter() {
    //creates counter w/ no reps
    let defaultCounter = new Counter("Default Counter");
    saveCurrCounter(defaultCounter);
    return defaultCounter;
}

//get, parse, format items from localStorage
export function getStoredCounters() {
    function convertToCounter(obj) {
        // console.log("Creating a new counter from:");
        // console.log(obj);
        return new Counter(obj.name, obj.rowCount, obj.repCount, obj.repLength, obj.repStartRow, obj.node);
    }

    const counterObj = { 
        currCounter: JSON.parse(localStorage.getItem("curr-counter")),
        savedCounters: JSON.parse(localStorage.getItem("saved-counters"))
    }

    const currSavedCounter = counterObj.currCounter ? convertToCounter(counterObj.currCounter) : makeDefaultCounter();
    const convertedSavedCounters = counterObj.savedCounters ? (counterObj.savedCounters).map(obj => convertToCounter(obj)) : null;
    
    return {
        currCounter: currSavedCounter,
        savedCounters: convertedSavedCounters
    };
}



//save currCounter data to local storage:
//currCounter saved w/ each +/-, saved edit
export function saveAllCounters(curr, arr) {
    saveCurrCounter(curr);
    saveCountersList(arr);
}

export function saveCurrCounter(counter) {
    localStorage.setItem("curr-counter", JSON.stringify(counter));
}

export function saveCountersList(arr) {
    localStorage.setItem("saved-counters", JSON.stringify(arr));
}

export function saveNewCurr(newCounter) {
    let storedObj = getStoredCounters();
    if (storedObj.savedCounters) {
        storedObj.savedCounters.unshift(storedObj.currCounter);
    } else {
        storedObj.savedCounters = [storedObj.currCounter];
    }
    saveAllCounters(newCounter, storedObj.savedCounters)
}

//user adds new counter
//new counter is set as currCounter
//oldCounter is added to end of savedArray
//localStorage is updated

//switch counters:
//new counter, selected by name/position, is moved to currCounter
//prevCounter is unshift() to saved counters array (so shows at top)
//return updated saved array
//new/old counters are relative to being currCounter

//open counter from list
export function switchCounter(newCounter, oldCounter, savedCountersArray) {
    //remove old counter from array
    let i = savedCountersArray.find(c => c.name === newCounter.name)
    let newSavedCountersArray = splice(0, i).concat(splice(i, savedCountersArray.length));

    
    //add new counter to END of array
    return newSavedCountersArray.unshift(oldCounter);
}

export function deleteSavedCounters() {
    localStorage.removeItem("saved-counters");
}