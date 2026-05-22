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
// with an associated button to open
// and associated trash can to delete
export function showSavedCounters(savedArray) {
    const ul = document.querySelector(".saved-counter-container ul");

    savedArray.forEach(counter => {
        const btnName = document.createElement("button");
        btnName.textContent = counter.name;
        btnName.id = counter.id;
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "🗑";
        btnDelete.id = name;
        btnDelete.classList.add("delete");

        
        const li = document.createElement("li");
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

