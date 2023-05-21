//get values from interface - controller/start
function getValues(){
    //get value from page/document
    let freeValue = document.getElementById("freeValue").value;
    let fiveValue = document.getElementById("fiveValue").value;

    //parse into Integers - needed to validate input
    freeValue = parseInt(freeValue);
    fiveValue = parseInt(fiveValue);

    //validate that "freeValue" & "fiveValue" are integers
    if(Number.isInteger(freeValue) && Number.isInteger(fiveValue)){  //test logical conjunction
        //call Free5
        let f5data = generateNumbers(freeValue, fiveValue);
        f5data = Free5(freeValue, fiveValue);
        //call displayData
        displayData(f5data);
    }
    else{
        alert("Please enter Integers");
    }
}

//generate numbers from free to fiveValue - model/logic
function Free5(freeValue, fiveValue){
    let returnArray = [];
    
    //get all numbers from start to end
    for (let index = freeValue; index <= fiveValue; index++) {
        //execute loop until index = endValue

        //check if divisible by 3 & 5
        
        //push 'Free5' into array instead of Integer

        //check if divisible by 3
        
        //push 'Free' into array instead of Integer

        //check if divisible by 5
        
        //push '5' into array instead of Integer

        //if none push Integer into Array
        returnArray.push(index);
        
    }
    return returnArray;
}

//display bold numbers - view/display
function displayData(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index]; //assignemnt check
        if(number % 2 == 0) //equality check
        {
            className = "even";}
        else {className = "odd";}
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`; //creating HTML Table
    };
    document.getElementById("results").innerHTML = templateRows;
}