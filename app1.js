function onFormSubmit(){
   let selectedRow = null;
   event.preventDefault();
   let formData = readFormData();
   if(selectedRow === null){
        insertNewRecord(formData);
   }
   else{

   }
}

// Retrieve the data
function readFormData(){

  const name = document.getElementById("contactName").value;
  const tel = document.getElementById("contactTel").value;
  const email = document.getElementById("contactEmail").value;

  const data = [name, tel, email];

   console.log(data);
  return data;
}

// insert the data

function insertNewRecord(data){
  const [name, tel, email] = data
   let table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
   let newRow = table.insertRow(table.length); 
   let row1 = newRow.insertCell(0);
       row1.innerHTML = name;
   let row2 = newRow.insertCell(1);
       row2.innerHTML = tel;
   let row3 = newRow.insertCell(2);
       row3.innerHTML = email;

       let row4 = newRow.insertCell(3);
       row4.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button>Delete</button>`;
}


// Edit the data

function onEdit(td){
  let selectedRow = td.parentElement.parentElement;
  document.getElementById("contactName").value = selectedRow.rows[0].innerHTML;
  document.getElementById("contactTel").value = selectedRow.rows[1].innerHTML;
  document.getElementById("contactEmail").value = selectedRow.rows[2].innerHTML;
  
}


function updateRecord(formData){
   selectedRow.row[0].innerHTML = formData.contactName
   selectedRow.row[1].innerHTML = formData.contactTel
   selectedRow.row[2 ].innerHTML = formData.contactEmail
}