var employeePromise= d3.json("employee.json");
console.log(employeePromise)

var successFCN= function(employees)
{
    console.log("Data Collected", employees)
    drawTable(employees);
}

var failFCN= function(errormsg)
{ 
    console.log("No data to show", errormsg);
    
}

employeePromise.then(successFCN,failFCN);

console.log("drawTable")
var drawTable= function(employeeTable)
{

var rows= d3.select("#employeeTable tbody")
    .selectAll("tr")
    .data(employeeTable)
    .enter()
    .append("tr")

rows.append("td")
    .text(function(employee)
          {
    return employee.firstName;
})

rows.append("td")
    .text(function(employee)
          { return employee.lastName;
          })
rows.append("td")
    .append("img")
    .attr("src", function (employee)
          {return employee.photo;})
rows.append("td")
    .text(function(employee)
          { return employee.title; })
rows.append("td")
    .text(function(employee)
          { return employee.unit;})
rows.append("td")
    .text(function(employee)
          { return employee.email;})
rows.append("td")
        .text(function(employee)
              {return employee.bio;})
rows.append("td")
    .text(function(employee)
          {return employee.phone;})
}


 