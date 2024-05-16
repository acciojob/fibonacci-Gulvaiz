function fibonacci(num) {
    if (num <= 1) {
        return 0;
    }
    
    let a = 0;
    let b = 1;
   
    for (let i = 2; i < num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
	
    return b;
}


module.exports = fibonacci;
