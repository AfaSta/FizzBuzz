class FizzBuzzDetector {
	#minLength = 7;
	#maxlength = 100;
	#error = ""; 
/**
   * @param {string} str
*/
	isValid(str){

		if(str === null){
			this.#error = 'null';
			return false;
		}else if(str.length >= this.#minLength && str.length <= this.#maxlength){
			return true;
		}else{
			this.#error = 'range 7-100';
			return false;
		}
	}
 /**
   * @param {string} str
   */
	getOverlappings(str){
		let result = {
			str: "",
			count: 0,
		};

		if(this.isValid(str)){
			let arrWD = str.split(' ');
			for (let i=0; i < arrWD.length; i++){
				let word = /^[a-zA-Z0-9\']+$/.test(arrWD[i]);
				if((i+1) % 3 === 0 && (i+1) % 5 === 0 && /^[a-zA-Z0-9\']+$/.test(arrWD[i])){
					arrWD[i] = 'FizzBuzz';
					result.count += +1; 
				}else if((i+1) % 3 === 0 && /^[a-zA-Z0-9\']+$/.test(arrWD[i])){
					arrWD[i] = 'Fizz'
					result.count += +1; 
				}else if((i+1) % 5 === 0 && /^[a-zA-Z0-9\']+$/.test(arrWD[i])){
					arrWD[i] = 'Buzz'
					result.count += +1; 
				}
			}
			result.str = arrWD.join(' ');

			return result;

		}else{
			return this.#error;
		}
	}

}


