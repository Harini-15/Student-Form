function addRow(){
    const table = document.getElementById('two')

    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const  ageCell = row.insertCell(1);
    const  genderCell = row.insertCell(2);
    const  courseCell = row.insertCell(3);
    const  emailCell = row.insertCell(4);
    const deleteButtonCell = row.insertCell(5); 

    nameCell.innerHTML = document.getElementById('name').value;
    ageCell.innerHTML = document.getElementById('age').value;
    genderCell.innerHTML = genderCellFunction().value;
    courseCell.innerHTML = document.getElementById('course').value;
    emailCell.innerHTML = document.getElementById('email').value;
   
    const deleteButton = deleteButtonFunction();
    deleteButtonCell.appendChild(deleteButton);
}

function genderCellFunction(){
    const gender = document.getElementsByName('gender');
    let selectedGender;
    
    for(let radioElements = 0;radioElements < gender.length;radioElements++){
        if(gender[radioElements].checked){
            selectedGender = gender[radioElements]
            break;
        }
    }
    return selectedGender;
}

function deleteButtonFunction(){
    let buttonElement =  document.createElement('BUTTON');
    buttonElement.innerHTML = 'Delete';
    buttonElement.className = 'button';
    buttonElement.addEventListener('click', deleteRow);

    return buttonElement;
}

function deleteRow(){
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

