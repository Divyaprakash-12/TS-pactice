"use strict";
function getemp() {
    return fetch("employee.json")
        .then(res => res.json())
        .then(res => { return res; });
}
getemp().then(employee => {
    console.log(`Employee details in Cg-vak and G2` + "\n");
    console.log(employee.map(emp => "Employee Id :" + emp.emp_id + "   " + "Employee name :" + emp.emp_name + "\n").toString());
});
function fakeapi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}
fakeapi();
