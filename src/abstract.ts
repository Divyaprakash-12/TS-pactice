abstract class electricitybill {
    units: number;
    constructor( units: number) {
        this.units = units;
    }
   abstract billdetails():any;
}
class domestic extends electricitybill{
    constructor(units:number){
        super(units);
    }
    billdetails():any{
        console.log(`Domestic Electricity Bill  `);
        console.log(`Total units :${this.units}`);
        console.log(`Total amount : `+ (5*this.units))
    }
}
class Commercial extends electricitybill{
    constructor(units:number,){
        super(units);
    }
    billdetails():any{
        console.log(`Commercial Electricity Bill  `);
        console.log(`Total units :${this.units}`);
        console.log(`Total amount : `+ (10*this.units))
    }
}
let obj1=new domestic(120);
let obj2=new Commercial(120);
obj1.billdetails();
obj2.billdetails();
