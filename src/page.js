// functions related to visible page updates

//display current counter to user
export function showCurrCounter(counter) {
    const h3 = document.querySelector("#curr-counter h3");
    h3.textContent = counter.name;
    updateRowCount(counter);
}

//update row/rep numbers shown to user
export function updateRowCount(counter) {
    const rowCount = document.querySelector("#row-count");
    const repCount = document.querySelector("#rep-count");
    rowCount.textContent = counter.rowCount;
    repCount.textContent = counter.repCount;
}

//display saved counters in a list
export function showSavedCounters(savedArray) {
    if (savedArray.length < 1) return "No additional saved counters found.";
    
    const ul = document.querySelector(".saved-counter-container ul");

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

        ul.appendChild(li);

    });

}

//remove saved counters from page
//eg, 
export function clearSavedCounters() {
    document.querySelector(".saved-counter-container ul").remove();
    const ul = document.createElement("ul");
    document.querySelector(".saved-counter-container").appendChild(ul);
}

export function removeOneCounter(id) {
    const currLi = document.querySelector(`#${id}`);
    currLi.remove();
    // TODO add confirmation modal
}

// confirmation modal for delete
export function confirm() {
    console.log("add confirm modal TODO");
}