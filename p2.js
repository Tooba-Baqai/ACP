function addValues(val1, val2) {
    if (val1 === null || val2 === null) {
        console.log("One or both values are null. Cannot perform addition.");
        return;
    }
    if (typeof val1 === "string") {
        val1 = Number(val1);
    }
    if (typeof val2 === "string") {
        val2 = Number(val2);
    }

    if (isNaN(val1) || isNaN(val2)) {
        console.log("One or both values are not valid numbers.");
        return;
    }

    let result = val1 + val2;
    console.log("Result:", result);
}

addValues("10", 20);       
addValues(null, 5);      
addValues("abc", "5");   
addValues(15, 25);    
