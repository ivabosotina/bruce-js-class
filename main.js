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