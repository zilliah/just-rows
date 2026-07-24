// functions related to visible page updates

import { getStoredCounters } from "/src/storage.js";

export function showAllCounters() {
    showCurrCounter();
    showSavedCounters();
}

//display current counter to user
export function showCurrCounter() {
    const counter = getStoredCounters().currCounter;
    const h3 = document.querySelector("#curr-counter h3");
    h3.textContent = counter.name;
    updateRowCount();
}

//TODO only show rep count if the counter uses repeats (default does not)
//update row/rep numbers shown to user
export function updateRowCount() {
    const counter = getStoredCounters().currCounter;
    const rowCount = document.querySelector("#row-count");
    const repCount = document.querySelector("#rep-count");
    rowCount.textContent = counter.rowCount;
    repCount.textContent = counter.repCount;
}

//display saved counters in a list
export function showSavedCounters() {
    const savedArray = getStoredCounters().savedCounters;

    if (!savedArray || savedArray.length < 1) return "No saved counters found.";
    
    clearSavedCounters();
    const ol = document.querySelector(".saved-counter-container ol");

    savedArray.forEach(counter => {
        const btnName = document.createElement("button");
        btnName.textContent = counter.name;
        btnName.classList.add("counter-name-btn");
        
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "🗑";
        btnDelete.classList.add("delete");
        
        
        const li = document.createElement("li");
        li.id = counter.id;
        li.appendChild(btnName);
        li.appendChild(btnDelete);

        ol.appendChild(li);

    });

}

//remove saved counters from page
export function clearSavedCounters() {
    document.querySelector(".saved-counter-container ol").remove();
    const ol = document.createElement("ol");
    document.querySelector(".saved-counter-container").appendChild(ol);
}

export function removeOneCounter(id) {
    const currLi = document.querySelector(`#${id}`);
    currLi.remove();
    // TODO add confirmation modal
}

