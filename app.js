// Parent Class
function Employee(name, designation) {
    //this.name = name;
    this.designation = designation;   
    console.log(arguments); 
}

// Manager Class
function Manager(name, designation) {	
    Employee.call(this, name, designation);
    this.role = 'Manager';    
}

// Developer Class
function Developer(name, designation) {	
    Employee.apply(this, [name, designation]);  
    this.role = 'Developer';
}

var mydev = new Developer("Tarun","Software Enginner");