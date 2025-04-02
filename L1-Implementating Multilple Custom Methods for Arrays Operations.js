function filterEvenNumbers(arr){
    let even = arr.filter((ele,i)=>arr[i]%2 == 0)
    return even
}

function sumOfArray(arr){
    let sum = arr.reduce((acc, curr)=> acc+curr,0)
    return sum
}

function sortAndConcat(arr1,arr2){
    arr1.sort()
    arr2.sort()
    return arr1.concat(arr2)
}


let arr = [15, 30, 45, 60, 75, 90];
let arr1 = [5, 32, 15, 6, 5, 9];
console.log("Filtered even numbers usinf filter method:", filterEvenNumbers(arr))
console.log("Sum of an array using reduce:", sumOfArray(arr))
console.log("sort 2 arrays and concating using sort() and concat():", sortAndConcat(arr, arr1))
