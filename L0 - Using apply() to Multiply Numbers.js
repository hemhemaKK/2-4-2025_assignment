function multiplyNumbers(){
    let value = {
        multiply: function(a,b) {
        return a * b;
      }
    };
    console.log(value.multiply.apply(null,[5,8]));
}

multiplyNumbers()
