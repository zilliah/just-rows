export class Counter {
    constructor(name = `Counter`, rowCount = 1, repCount = 1, repLength = null, repStartRow = 1, node = undefined)  {
        this.name = name;
        this.id = name.trim().replaceAll(/\s+/g,"-");
        this.rowCount = rowCount;
        this.repCount = repCount;
        this.repLength = repLength;
        this.repStartRow = repStartRow; // for when repeats don't start at row 1
        // this.node = node; //WHAT WAS THIS FOR?????? the page node? for saved counters i guess?...maybe revisit this, idk.
    }

    // TODO this needs to be part of creating a new counter
    // but if it's making a default one then auto name it? maybe "counter" + saved array length (or ++ if that already exists)
    validateName(savedCountersArr) {
        if (this.name.length < 1) throw new Error("Counter name cannot be blank.");
        const existingNames = savedCountersArr.map(c => c.name);
        if (existingNames.includes(this.name)) throw new Error("Name already exists. Try a different name.");
    }

    //both of these are including 0th rows
    // hmmm
    addRow() {
        if (this.repLength && this.rowCount + 1 > this.repLength) {
            this.repCount++;
            this.rowCount = 0;
        }
        this.rowCount++;
    }

    // CURR this isn't working right
    subtractRow() {
        if (this.rowCount > 1) this.rowCount--;
        else if (this.repLength && this.repCount > 1) {
            this.repCount--;
            this.rowCount = this.repLength;
        }
    }

    //only used when edited by user
    userUpdate(name, rowCount, repCount, repLength) {
        if (name) this.name = name;
        if (rowCount >= 0) this.rowCount = rowCount;
        if (repCount >= 0) this.repCount = repCount;
        if (repLength >= 0) this.repLength = repLength;
    }

    resetCounts() {
        this.rowCount = 0;
        this.repCount = 0;
    }

    removeRep() {
        this.repCount = null;
        this.repLength = null;
    }
}