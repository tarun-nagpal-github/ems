// Parent Class
function Employee(name, designation) {
    this.name = name;
    this.designation = designation;    
}

// Manager Class
function Manager(name, designation) {	
    Employee.call(this, name, designation);
    this.role = 'Manager';    
}

// Developer Class
function Developer(name, designation) {	
    Employee.call(this, name, designation);
    this.role = 'Developer';
}


var userModule = (function() {
    var developers = [];
    var managers = [];
    return {
        developers: developers,
        managers: managers,
        save: function(name, designation, role) {
            switch (role) {
                case 'Developer':
                    developers.push(new Developer(name, designation));
                    break;
                case 'Manager':
                    managers.push(new Manager(name, designation));
                    break;
                default:
                    console.log('invalid role:' + role);
                    break;
            }
        }
    }
})();

function reRender() {
    $('#dev-list').empty();
    $('#man-list').empty();

    for (var i = 0; i < userModule.developers.length; i++) {
        $("#dev-list").append($("<li>").text(userModule.developers[i].name));
    }
    for (var j = 0; j < userModule.managers.length; j++) {
        $("#man-list").append($("<li>").text(userModule.managers[j].name));
    }
}



// Submit the form
function submitForm() {
    var name = $('#name').val();
    var designation = $('#designation').val();
    var role = $('#role').val();
    if (name == "" || designation == "") {
        alert("Please enter name and designation");
        return false;
    } else {
                  
        userModule.save(name, designation, role);
        reRender();
    }
}

// Tabber feature 
$(document).ready(function() {
    // Tabber 
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        // remove old selected
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        // add current class
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
});
