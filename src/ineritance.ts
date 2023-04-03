class course{
    courseName: string;
    courseId ?:number|string;
    constructor(courseId: number|string,courseName: string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
   courseDetails(){
    console.log(`Course Id : `+ this.courseId);
    console.log(`Course Name : `+ this.courseName);
   } 
}
class employee extends course{
    empId ?: string|number;
    empName: string;
    empDes: string; 
    constructor(courseId: number|string,courseName: string,empId :string|number, empName: string,empDes:string ){
        super(courseId,courseName);
        this.empId=empId;
        this.empName=empName;
        this.empDes=empDes;
    }
    employeedetails(){
        console.log(`Employee Id : `+ this.empId);
        console.log(`Employee Name : `+ this.empName);
        console.log(`Employee Designation : `+ this.empDes);
    }
}
class admin extends employee{
    adminId ?: string|number;
    adminName: string;
    constructor(courseId: number|number,courseName: string,empId: string|number,
        empName: string,empDes: string,adminId: string|number,adminName: string){
        super(courseId,courseName,empId,empName,empDes);
        this.adminId=adminId;
        this.adminName=adminName;
    }
    admindetails(){
        result.courseDetails();
        result.employeedetails();
        console.log(`Admin Id : `+ this.adminId);
        console.log(`Admin Name : `+ this.adminName);
      
    }
}
let result=new admin(101,'python','emp01','hari','developer','Admin01','Karthi');
result.admindetails()
