//get values from interface - controller/start
function getValues(){
    //get value from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers - needed to validate input
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    }
    else{
        alert("Please enter an Integer");
    }
}

//generate numbers from start to endvalue - model/logic
function generateNumbers(startValue, endValue){
    let numbers = [];
    
    //get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        //execute loop until index = endValue
        numbers.push(index);
    }
    return numbers;
}

//display bold numbers - view/display
function displayNumbers(numbers){
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