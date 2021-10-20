function multiply() {
    //input
    console.log("hello");
    const firstNumber = document.getElementById("firstNumber").value;
    console.log(firstNumber);

    const secondNumber = document.getElementById("secondNumber").value;
    console.log(secondNumber)

    //process

    const answer = firstNumber * secondNumber;
    console.log(answer);

    //output
    document.getElementById("Output").innerText = answer;

}


//drugi zadatak

function calcAge() {
    console.log("calcAge");

    //input
    const years = document.getElementById("years").value;
    console.log(years);
    //process

    const days = years * 365;
    console.log(days)
    //output

    document.getElementById("ageOutput").innerText = days;
}

function increment() {
    //test the link
    console.log("increment linked");

    //input 
    const strIncrement = document.getElementById("inputIncrement").value;
    //process
    let ansIncrement = parseInt(strIncrement);
    //ansIncrement=ansIncrement+1; - option 1
    //ansIncrement +=1; - option2
    ansIncrement++; //-option 3

    console.log(ansIncrement);
    //output
    document.getElementById("perIncrement").innerText = ansIncrement;

}


// coverting hours into seconds

function converting() {
    //test the link
    console.log("converting hours");



    //input 
    const strHours = document.getElementById("second").value;
    //process
    let hours = parseInt(strHours);
    //ansIncrement=ansIncrement+1; - option 1
    //ansIncrement +=1; - option2

    const second = hours * 3600;
    console.log(second)


    //output
    document.getElementById("secondOutput").innerText = second;

}

// ************Arrays************************



function arrayElemnt() {
    //test the link
    console.log("array element linked");



    //input 
    const strArray1 = document.getElementById("inputArray1").value;
    const strArray2 = document.getElementById("inputArray2").value;
    const strArray3 = document.getElementById("inputArray3").value;
    //process
    const ansArray = [strArray1, strArray2, strArray3]; //defined array
    const firstElement = ansArray[0];




    //output
    document.getElementById("perArray").innerText = firstElement;

}

/**
 * 
 * @param {*} mass 
 * @param {*} height 
 */
function bmi(mass, height) {
    console.log("hello");

    //process 
    const intMass = parseInt(mass);
    const intHeight = parseInt(height);

    const answer = divide(intMass, squared(intHeight));

    return answer;

}

/**
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @returns 
 */
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


/**
 * 
 * @param {*} number 
 * @returns 
 */
function squared(number) {
    return number * number;
}