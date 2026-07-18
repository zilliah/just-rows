export class Counter {
    constructor(name = `Counter`, rowCount = 0, repCount = null, repLength = null, repStartRow = 1, node = undefined)  {
        this.name = name;
        this.id = name.trim().replaceAll(/\s+/g,"-");
        this.rowCount = rowCount;
        this.repCount = repCount;
        this.repLength = repLength;
        this.repStartRow = repStartRow; //when repeats don't start at row 1
        this.node = node;
    }

    //call this when creating a new counter
    validateName(savedCountersArr) {
        if (this.name.length < 1) throw new Error("Counter name cannot be blank.");
        const existingNames = savedCountersArr.map(c => c.name);
        if (existingNames.includes(this.name)) throw new Error("Name already exists. Try a different name.");
    }

    addRow() {
        if (this.rowCount + 1 > this.repLength) {
            this.repCount++;
            this.rowCount = 0;
        }
        this.rowCount++;
        console.log("counted 1 more row");
    }

    subtractRow() {
        if (this.rowCount > 0) this.rowCount--;
        else if (this.repCount > 0) {
            this.repCount--;
            this.rowCount = 1;
        }
        console.log("row ct--");
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