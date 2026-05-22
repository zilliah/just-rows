export class Counter {
    constructor(name, rowCount = 0, repCount = null, repLength = null) {
        this.name = name;
        this.rowCount = rowCount;
        this.repCount = repCount;
        this.repLength = repLength;
        this.lastUsed = Temporal.Now.instant();
    }

    addRow() {
        if (this.rowCount + 1 > this.repLength) {
            this.repCount++;
            this.rowCount = 0;
        }
        this.rowCount++;
        console.log("row ct++");
        this.lastUsed = Temporal.Now.instant();
    }

    subtractRow() {
        if (this.rowCount > 0) this.rowCount--;
        else if (this.repCount > 0) {
            this.repCount--;
            this.rowCount = 1;
        }
        console.log("row ct--");
        this.lastUsed = Temporal.Now.instant();
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