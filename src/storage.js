// handles counter functions which relate to localStorage

//get and parse items from localStorage
export function getStoredCounters() {
    return { 
        currCounter: JSON.parse(localStorage.getItem("curr-counter")),
        savedCounters: JSON.parse(localStorage.getItem("saved-counters"))
    }
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