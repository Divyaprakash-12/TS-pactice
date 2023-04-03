"use strict";
class electricitybill {
    constructor(units) {
        this.units = units;
    }
}
class domestic extends electricitybill {
    constructor(units) {
        super(units);
    }
    billdetails() {
        console.log(`Domestic Electricity Bill  `);
        console.log(`Total units :${this.units}`);
        console.log(`Total amount : ` + (5 * this.units));
    }
}
class Commercial extends electricitybill {
    constructor(units) {
        super(units);
    }
    billdetails() {
        console.log(`Commercial Electricity Bill  `);
        console.log(`Total units :${this.units}`);
        console.log(`Total amount : ` + (10 * this.units));
    }
}
let obj1 = new domestic(120);
let obj2 = new Commercial(120);
obj1.billdetails();
obj2.billdetails();
