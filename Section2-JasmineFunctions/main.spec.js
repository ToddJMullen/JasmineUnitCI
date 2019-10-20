describe('main.js', function(){


	describe("calculate()", function(){

		xit("validates expression");
		xit("calls add");
		xit("calls subtract");
		xit("calls multiply");
		xit("calls divide");
		xit("validate operation");
		xit("calls updateResult")
		
	});



	describe("updateResult()", function() {
		// let element;//converted to this.element to exist throughout

		///////
		// Warning: Using arrow functions in the 'child' methods changes their context 
		// and you have to swithc back to the 'shared' parent variable implementation because 
		// 'this' wont be the correct scope to reference 'element'
		//////


		beforeAll(function(){
			//run once before all the tests
			const element = document.createElement("div");
			element.setAttribute("id", "result"); 
			document.body.appendChild(element);
			this.element = element;
		})
		afterAll(function(){
			// const element = document.getElementById("result");//not needed since we already have the handle
			document.body.removeChild(this.element); 
		})
		
		it("adds result to DOM element", function(){
			// const element = document.createElement("div");
			updateResult("5"); 
			expect( this.element.innerText ).toBe("5");

		})
		
	});

	describe("updateResult() with => ", () => {
		let element;

		///////
		// Warning: Using arrow functions in the 'child' methods changes their context 
		// and you have to user the 'shared' parent variable implementation because 
		// 'this' wont be the correct scope to reference 'element'
		//////

		beforeAll(() => {
			//run once before all the tests
			element = document.createElement("div");
			element.setAttribute("id", "result"); 
			document.body.appendChild(element);
			// element = element;
		})
		afterAll(() => {
			// const element = document.getElementById("result");//not needed since we already have the handle
			document.body.removeChild(element); 
		})
		
		it("adds result to DOM element", () => {
			// const element = document.createElement("div");
			updateResult("5"); 
			expect( element.innerText ).toBe("5");

		})
		
	});



});