function fibonacci(num) {
	 nction fibonacci(num) {
    let a = 0;
    let b = 1;
   
    for(let i= 2; i<=num; i++){
        let temp = a;
        a = b;
        b = temp + b;
    }
	
    return a;
	 
	
}

module.exports = fibonacci;
