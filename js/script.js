let formEmployee = document.querySelector('form');
formEmployee.addEventListener('submit', (e) =>{
    e.preventDefault();    
    let idEmployee = document.getElementById('idUser');
    let nameEmployee = document.getElementById('nameUser');
    let extEmployee = document.getElementById('extUser');
    let emailEmployee = document.getElementById('emailUser');
    let department = document.querySelector('#department');
    let msjAdv = 'Invalid input';   
    if(idEmployee.value.length > 8 && extEmployee.value.length > 4){
        // alert('Please, complete the form again');    
        document.getElementById("warnMsg-id").innerHTML= msjAdv;
        document.getElementById("warnMsg-ext").innerHTML= msjAdv;
    }else if(idEmployee.value.length > 8){
        // alert('Please, complete the form again'); 
        document.getElementById("warnMsg-id").innerHTML= msjAdv;
    }else if(extEmployee.value.length > 4){
        // alert('Please, complete the form again'); 
        document.getElementById("warnMsg-ext").innerHTML = msjAdv;
    }else{
        console.log(`ID: ${idEmployee.value}`);
        console.log(`Name: ${nameEmployee.value}`);
        console.log(`Extension: ${extEmployee.value}`);
        console.log(`Email: ${emailEmployee.value}`);
        console.log(`Department: ${department.value}`);
        alert('Form has been sumbitted successfully! ');
    }   
});

