function fibonacci(num) {
	a = 0;
	b = 1;
   
	for(let i= 0; i<=num; i++){
		let sum = 0;
		   console.log(a);
	       console.log(b);
		 a = b;
		b = c;
		c = a+b;
		sum = sum + c;
		console.log(sum);
	}
}

module.exports = fibonacci;
