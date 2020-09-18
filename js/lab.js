var employeePromise= d3.json("employee.json");
console.log(employeePromise)

var successFCN= function(employees)
{
    console.log("Data Collected", employees);
}

var failFCN= function(errormsg)
{ 
    console.log("No data to show", errormsg);
}

employeePromise.then(successFCN,failFCN);