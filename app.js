'use strict';

function Employee (EmployeeID,FullName,Department,Level,Image,Salary){
   this.EmployeeID = EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level =Level ;
    this.Image =' ./image/images.PNG ';
    this.Salary=function Salary(min, max) {
                   min = Math.ceil(400);
                   max = Math.floor(1000);
                   return Math.floor(Math.random() * (max - min) + min);
                 } ;

}
function Salary(min, max) {
    min = Math.ceil(400);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min) + min);
  }
 
  const junior = new Employee(1,'ahmad ','Administration','junior',Image,Salary)
  const MidSenior = new Employee(2,'khaled','Marketing','MidSenior',Image,Salary)
  const Senior = new Employee(3,'ola','Finance','Senior',Image,Salary)

Employee.prototype.render=function(){
    document.write(`<p>${this.Level} is added to the menu</p>`)
}
employee.render();