function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumber(number1, number2){
    return number1+number2
}

const result = addTwoNumber(3,5)
// console.log("Result: ", result);

function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,500,2000));

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function one(){
    const username = "akash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()
