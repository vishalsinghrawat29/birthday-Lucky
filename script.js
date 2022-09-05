const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

// Notice to client
alert("Please note that we are not storing your data anywhere"); 


function compareValues(sum,luckyNumber){
    if (sum == 0) {
        outputBox.innerText = "Please Select a Date ";
    }
    else if (luckyNumber <= 0) {
        outputBox.innerText = "Lucky number should be greater than zero";
    }else{
        if(sum%luckyNumber === 0){
            outputBox.innerText = "Your birthday is lucky 🎊";
        }else{
            outputBox.innerText = "Your birthday is not lucky 💔";
        }
    }
}

function checkBirthIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum, luckyNumber.value);
    }else{
        outputBox.innerText = "Please enter Date and Lucky Number ✍️";
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i =0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}


checkNumber.addEventListener('click', checkBirthIsLucky);
