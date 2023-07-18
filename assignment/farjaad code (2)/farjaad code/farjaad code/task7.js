//class of employee whith name and salary as its properties whith constructor,setters and getters
class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    setName(name){
        this.name=name;
    }
    setsalary(){
        this.salary=this.salary;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
    getAnualsalary(){
        return this.salary*12;
    }
}
//manager class with department property
//this class inherits the properties of employees 
class manager extends employee{
    //constructor for department
    constructor(department,name,salary){
        //as the parent of manager is employee class so first the employee constructor is called using the keyword super
        super(name,salary);
        this.department=department;
    }
    //overriding the getanulsalay function for the manager 
    getAnualsalary(){
        let bonus=(10/100)*this.salary;
        return this.salary+bonus;
    }
}
bilal=new manager("IT","bilal",20000);
farjaad=new manager("HR","farjaad",30000);
console.log("anual salary of bilal is : ",bilal.getAnualsalary());
console.log("anual salary of bilal is : ",farjaad.getAnualsalary());