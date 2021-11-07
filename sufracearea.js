function calcSurfaceArea(base, height) {
    console.log("I am connected");
    console.log("triangle", base, height);


    //process
    const answer = 0.5 * base * height;
    console.log(answer);
    //output
    return answer;
}

function getInput(id) {
    return document.getElementById(id).value;
}

function showOutput(id, message) {
    document.getElementById(id).innerText = message;
}