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
        let f5Array = Free5(freeValue, fiveValue);
        f5Array = Free5(freeValue, fiveValue);
        //call displayData
        displayData(f5data);
    }
    else{
        //ask user to enter Integers only
        alert("Please enter Integers");
    }
}

//generate numbers from free to fiveValue - model/logic
function Free5(freeValue, fiveValue){
    //create blank array
    let returnArray = [];
    
    //loop from iterator 1 to 100
    for (let i = 1; i <= 100; i++) {
        //execute loop until index = endValue

        //check if divisible by 3 & 5
        if(i % freeValue == 0 && i % fiveValue == 0){
            //push 'Free5' into array instead of Integer
            returnArray.push('Free5');
        }
        //check if divisible by 3
        else if(i % freeValue == 0){
            //push 'Free' into array instead of Integer
            returnArray.push('Free');}
        //check if divisible by 5
        else if(i % fiveValue == 0){
            //push '5' into array instead of Integer
            returnArray.push('5');}
        //if none push Integer into Array
        else{returnArray.push(i);}        
    }
    return returnArray;
}

//display bold numbers - view/display
function displayData(f5Array){
    //get table body element from page/document
    let templateBody = document.getElementById("results");

    //get template row
    let templateRow = document.getElementById("f5Template");

    //clear table first
    tableBody.innerHTML = "";

    //loop over Array & create tablerow for each item
    for (let index = 0; index < f5Array.length; index += 5) {
        //invoke table row from app.html
        let tableRow = document.importNode(templateRow.content, true);
        //determine template width
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbData[i];
        rowCols[1].textContent = fbData[i+1];
        rowCols[2].textContent = fbData[i+2];
        rowCols[3].textContent = fbData[i+3];
        rowCols[4].textContent = fbData[i+4];

        //append value in table row
        tableBody.appendChild(tableRow);
      };

    //Add all rows to table
    document.getElementById("results").innerHTML = templateRows;
}