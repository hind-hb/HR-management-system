'use strict';
let arr=[];

function Employee (EmployeeID,FullName,Department,Level,Image,Salary){
   this.EmployeeID = EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level =Level ;
    this.Image ='/image/images.png';
    this.Salary=Salary; 
    arr.push(this);
  
  }


function senior(min = 1500, max=2000) {
   let s = Math.floor(Math.random()*(max-min)) +min;
   s= s-s*0.075;
  return ;
  
  }
  
function midSenior(min = 1000, max=1500) {
  let s = Math.floor(Math.random()*(max-min)) +min;
  s= s-s*0.075;
  return;
 
 }
 function junior(min = 500, max=1000) {
  let s = Math.floor(Math.random()*(max-min)) +min;
  s= s-s*0.075;
  return ;
 
 }
 
  const emp1 = new Employee('1000','Ghazi Samer ','Administration','Senior',senior(),Image,'Salary')
  const emp2 = new Employee('1001','Lana Ali','Finance','Senior',senior(),Image,'Salary')
  const emp3 = new Employee('1002','Tamara Ayoub','Marketing','senior',senior(),Image,'Salary')
  const emp4 = new Employee('1003','Safi Walid','Administration','Mid-Senior',midSenior(),Image,'Salary')
  const emp5 = new Employee('1004','Omar Zaid','Development','senior',senior(),Image,'Salary')
  const emp6 = new Employee('1005','Rana Saleh','Development','junior',junior(),Image,'Salary')
  const emp7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior',midSenior(),Image,'Salary')
console.log(arr);

var EmployeeId = Math.floor(1000 + Math.random() * 9000);
console.log(EmployeeId);
for (let i=0;i<arr.length;i++)
{
Employee.prototype.render=function(){
  
  let mysection = document.getElementById('employee');
   
   let divEl = document.createElement('div');
         mySection.appendChild(divEl)
         let p1E1 = document.createElement('name');
             divEl.appendChild(p1E1);
             p1E1.textContent = this.name;
        let seE1 = document.createElement("option");
            divEl.appendChild(seE1);
            seE1.setAttribute = this.Department;
        let imgEl = document.createElement('img');
            divEl.appendChild(imgEl);
            imgEl.setAttribute('src',employee.imagePath);
            imgEl.setAttribute('alt',employee.name);
 
  document.write(`<p>${this.EmployeeID} ${this.FullName} ${this.Department} ${this.Level} </p>`)
  
}
arr[i].render();}

 function addEmp(event){
  event.preventDefault();
  Employee.push([EmployeeId(),name.value,Department.value,Level.value,Image.value]);
 }
 const form = document.getElementById('employee');
 form.addEventListener('submit',addEmp);





