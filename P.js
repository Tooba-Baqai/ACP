var globalVar = "I am a global variable";

function testScope() {

    var functionVar = "I am a function-scoped variable";
    console.log("Inside function:");
    console.log("globalVar:", globalVar);       
    console.log("functionVar:", functionVar);   

    if (true) {
        let blockVar = "I am a block-scoped variable";
        console.log("Inside if block:");
        console.log("blockVar:", blockVar);     
    }
}

testScope();

console.log("Outside function:");
console.log("globalVar:", globalVar); 
