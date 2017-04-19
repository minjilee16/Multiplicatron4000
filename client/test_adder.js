const multiply= require ('./adder.js');


class TestSuite {

	runTest (testName) {
		let result = this[testName]();
		console.log(result, testName); 
	}

	runTests () {
  		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
  		.filter(prop => this[prop] instanceof Function)
  		.filter(prop => prop.indexOf('test') !== -1)
  		.forEach(testName => this.runTest(testName) )
	}

	assertEquals(a, b) {
		return a === b; 
	}

	testMultiplyTwoPositiveNumbers() {
		return this.assertEquals(multiply([2,5]),10);
	}

	testMultiplyThreeNegativeNumbers (){
		return this.assertEquals(multiply([-1, -2, -3]), -6); 
	}

	testMultiplyFourPositiveNegativeNumbers() {
		return this.assertEquals(multiply([-1,-2,2,6]), 24);
	}

}
	

const testSuite = new TestSuite();
testSuite.runTests(); 



