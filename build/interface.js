"use strict";
class G2tech_Cgvak {
    constructor(Trainee_name, Trainee_salary, Trainer_name) {
        this.Trainee_name = Trainee_name;
        this.Trainee_salary = Trainee_salary;
        this.Trainer_name = Trainer_name;
    }
    company(CName) {
        if (CName == "cgvak") {
            console.log(`Welcome to CGVAK `);
            console.log(`Trainee name : ${this.Trainer_name}`);
            console.log(`Trainee salary : ${this.Trainee_salary}`);
            console.log(`Trainer name : ${this.Trainer_name}`);
        }
        else if (CName == "G2 Tech") {
            console.log(`Welcome to G2 `);
            console.log(`Trainee name : ${this.Trainer_name}`);
            console.log(`Trainee salary : ${this.Trainee_salary}`);
            console.log(`Trainer name : ${this.Trainer_name}`);
        }
    }
}
let cg = new G2tech_Cgvak("darshan", 40000, "Thangam");
let g2 = new G2tech_Cgvak("prakash", 50000, "pallavi");
cg.company("CGVAK");
g2.company("G2 Tech");
