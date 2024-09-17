function toggleMenu(){
    var navbar = document.getElementById("myNavbar");
    if(navbar.className === "navbar"){
        navbar.className += "responsive";
    }
    else{
        navbar.className = "navbar";
    }
}


/**CRUD control */

function addRow(){
    
    //input name
    const input = document.getElementById('inputName');
    const name = input.value.trim();

    //input Date
    const inputDates = document.getElementById('inputDate');
    const deDate = inputDates.value.trim();

    //input category
    const selectCategories = document.getElementById('selectCategory');
    const categories = selectCategories.value.trim();


    if (name, deDate, categories){

        const table = document.getElementById('tblTasks').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        cell1.textContent = name;
          
        //Date input
        const table2 = document.getElementById('tblTasks').getElementsByTagName('tbody')[1];
        const cell2 = newRow.insertCell(1);
        cell2.textContent = deDate;

        //Category input
        const table3 = document.getElementById('tblTasks').getElementsByTagName('tbody')[2];
        const cell3 = newRow.insertCell(2);
        cell3.textContent= categories;
        
        //insert edit and delete button
        const cell4 = newRow.insertCell(3);
        cell4.innerHTML= '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';


        input.value = '';   //clear task input
        inputDates.value = '';  //clear date input
        selectCategories.value = '';  //clear categories input
    }
    else{
        alert('Please enter a tasks details');
    }
}

function editRow(button){
    const row = button.parentNode.parentNode;
    const nameCell = row.cells[0];
    const newName = prompt("Edit name:", nameCell.textContent);

    if (nameCell !== null){
        nameCell.textContent = newName.trim() || nameCell.textContent;
    }
}

function deleteRow(button){
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}