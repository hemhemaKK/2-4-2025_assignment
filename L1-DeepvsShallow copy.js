function mainfunction(){
    let original = {
        name: "Alice",
        hobbies: ["reading", "traveling"] 
    };
    console.log("original: ", original)
    function deepClone(obj){
        let converting = JSON.stringify(obj)
        let output = JSON.parse(converting)
        
        console.log("deepClone: ", output)
    }
    deepClone(original);
}

mainfunction()
