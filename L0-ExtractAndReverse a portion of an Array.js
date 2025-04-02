let arr = [15, 30, 45, 60, 75, 90];

function extractAndReverse(arr){
   let new_arr = arr.slice(3, 5);
   let output = []
   for(let i=new_arr.length-1; i>=0; i--)
      output.push(new_arr[i])
    console.log("slice array:", new_arr)
    console.log("Reverse array of slicing:", output)
}

extractAndReverse(arr)