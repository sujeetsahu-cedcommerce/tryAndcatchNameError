var emp= [];
 function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    if(emp_Sal<=0){
        debugfunction();
    }
    else{
    check(emp_ID,emp_Name,emp_Sal);
    }
}
function render()
{
    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>";
    for(var i=0;i<emp.length;i++)
    {
        text += "<tr id = '"+ i +"'>";
        for(let j=0;j<=2;j++){
            text +="<td>" + emp[i][j] + "</td>";
        }
        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";
        text +="</tr>";
    }
    text +="</table>";
    document.getElementById("display").innerHTML=text;
    return text;
}
function Delete_Emp(obj){
    var deltd =obj.closest('td');
    var deltd_par = deltd.parentElement;
    var index = deltd_par.id;
    console.log(index);
    emp.splice(index,1);
    console.log(emp);
    document.getElementById("display").innerHTML=render();
  
}


function check(emp_ID,emp_Name,emp_Sal){
    try{
        if(emp_ID =="") throw "ID field should be filled";
         
        if(emp_Sal <10000 || emp_Sal>40000) throw "salary must greater than 10000 and smaller than 40000"; 
        if(emp_Name =="") {throw "name cannot be empty"; console.log("name_empty");}
        else if(!isNaN(emp_Name)) {throw "name cannot be a number"; console.log("name is number");}

        const temp =[emp_ID,emp_Name,emp_Sal];
        len=emp.length;
        emp[len]=temp;
        render();
     }
     catch(error){
        alert(error);
       // console.warn(error);
        document.getElementById("displayErr").innerHtml=error;
        document.getElementById("displayErrEmpty").innerHtml=error;
        document.getElementById("displayErrNAN").innerHtml=error;

     } 
}

function debugfunction(){

    console.warn("salary never be zero");
    debugger;
}