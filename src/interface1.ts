interface CGVAK {
    Trainee_name: string;
    Trainee_salary: number;
    Trainer_name: string;
    company(CName: string): void;
}
interface G2 {
    Trainee_name: string;
    Trainee_salary: number;
    Trainer_name: string;
    company(CName: string): void;
}
class G2tech_Cgvak implements CGVAK, G2 {
    Trainee_name: string;
    Trainee_salary: number;
    Trainer_name: string;
    constructor( Trainee_name: string, Trainee_salary: number,  Trainer_name: string){
        this.Trainee_name=Trainee_name;
        this.Trainee_salary=Trainee_salary;
        this.Trainer_name=Trainer_name;
    }

    company(CName:string){
        if(CName=="CGVAK"){
           console.log(`Welcome to CGVAK `);
           console.log(`Trainee name : ${this.Trainee_name}`)
           console.log(`Trainee salary : ${this.Trainee_salary}`)
           console.log(`Trainer name : ${this.Trainer_name}`)
        }
        else if(CName=="G2 Tech"){
            console.log(`Welcome to G2 `);
            console.log(`Trainee name : ${this.Trainee_name}`)
            console.log(`Trainee salary : ${this.Trainee_salary}`)
            console.log(`Trainer name : ${this.Trainer_name}`)
        }
     }
}
let cg:CGVAK=new G2tech_Cgvak("darshan",40000,"Thangam");
let g2:G2=new G2tech_Cgvak("prakash",50000,"pallavi");
cg.company("CGVAK");
g2.company("G2 Tech")