function mainfunction(){
    let output = {
        personInfo(age){
            return `My name is ${this.name} and my age is ${age}.`
        }
    };
    let user = {name:"Hemavathi"}
    console.log(output.personInfo.call(user,23))
}
mainfunction()