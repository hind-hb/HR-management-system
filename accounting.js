'use strict';
  
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
  
  function average(Department,Salary){
    const department = this.Department;
    let  average ;
    for(let i =0; i<Employee.allEmployee.length;i++) {
        let employee = Employee.allEmployee[i];

    switch (department) {
        case "Administration":
            average = Salary /Employee.allEmployee.length
            break;
        case "Finance":
            average = Salary /Employee.allEmployee.length
            break;
        case "Marketing":
            average = Salary /Employee.allEmployee.length
            break;
        case "Development":
            average = Salary /Employee.allEmployee.length
            break;
        default:
            average = Salary /Employee.allEmployee.length
    }
  }}
function Employee (EmployeeID,FullName,Department,Level,Image,Salary){
    this.EmployeeID = EmployeeID;
     this.FullName=FullName;
     this.Department=Department;
     this.Level =Level ;
     this.Image ='/image/images.png';
     this.Salary=Salary;
     Employee.allEmployee.push(this);
    
    }

   


Employee.allEmployee = [];


function render(){
   // Employee.prototype.render = function(){
 
    let mySection = document.getElementById('employee');
    
    for(let i =0; i<Employee.allEmployee.length;i++) {
       let employee = Employee.allEmployee[i];
       console.log(employee);
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
              
    }

    let tableEL = document.createElement('table');
  mySection.appendChild(tableEL);

  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let thEL = document.createElement('th');
  trEl.appendChild(thEL);
  thEL.textContent= "Department"
  

  
  let th1EL = document.createElement('th');
  trEl.appendChild(th1EL);
  th1EL.textContent= "# of employees"

  let th2EL = document.createElement('th');
  trEl.appendChild(th2EL);
  th2EL.textContent= "Total Salary"

  let th3EL = document.createElement('th');
  trEl.appendChild(th3EL);
  th3EL.textContent= "Average"

  for(let i=0; i<Employee.allEmployee.length;i++){
    let employee = Employee.allEmployee[i];
    
    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = Employee.Department;

    let td1El = document.createElement('td');
    trEl.appendChild(td1El);
    td1El.textContent = Employee.allEmployee.length;


    let td2El = document.createElement('td');
    trEl.appendChild(td2El);
    td2El.textContent = Employee.Salary;

    let td3El = document.createElement('td');
    trEl.appendChild(td3El);
    td3El.textContent = Employee.average;

    let myfoot = document.createTFoot('td');
        trEl.appendChild(myfoot);
        myfoot.textContent = 'Total number of employees';
        
    let myfoot1 = document.createTFoot('td');
    trEl.appendChild(myfoot1)
    myfoot1.textContent = 'Total Salary for all departments '

    let myfoot2 = document.createTFoot('td');
    trEl.appendChild(myfoot2)
    myfoot2.textContent = 'average salary for all departments '
    
}

const emp1 = new Employee('1000','Ghazi Samer ','Administration','Senior',senior(),Image,'Salary');
  const emp2 = new Employee('1001','Lana Ali','Finance','Senior',senior(),Image,'Salary');
  const emp3 = new Employee('1002','Tamara Ayoub','Marketing','senior',senior(),Image,'Salary');
  const emp4 = new Employee('1003','Safi Walid','Administration','Mid-Senior',midSenior(),Image,'Salary');
  const emp5 = new Employee('1004','Omar Zaid','Development','senior',senior(),Image,'Salary');
  const emp6 = new Employee('1005','Rana Saleh','Development','junior',junior(),Image,'Salary');
  const emp7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior',midSenior(),Image,'Salary');}

  
console.log( Employee.allEmployee);


render();