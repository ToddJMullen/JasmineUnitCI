describe('main.js', function(){


	describe("calculate()", function(){

		it("validates expression when first # is invalid", function(){
			spyOn(window, "updateResult" ).and.stub();//this will intercept calls to updateResult on the window (global NS)
			calculate("a+3"); 
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith("Operation or input not recognized!");
			expect( window.updateResult ).toHaveBeenCalledTimes(1);
		});
		
		it("validates expression when the 2nd # is invalid", function(){
			spyOn(window, "updateResult" )//.and.stub();//this is the default
			calculate("3+a"); 
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith("Operation or input not recognized!");
			expect( window.updateResult ).toHaveBeenCalledTimes(1);
		});
		
		it("validates expression when the operation is invalid", function(){
			spyOn(window, "updateResult" )//.and.stub();
			calculate("3_3"); 
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith("Operation or input not recognized!");
			expect( window.updateResult ).toHaveBeenCalledTimes(1);
		});


		it("calls add", function(){
			// spyOn(Calculator.prototype, "add");
			const spy = spyOn(Calculator.prototype, "add");

			calculate("3+7");
			// expect( Calculator.prototype.add ).toHaveBeenCalledTimes(2);
			expect( spy ).toHaveBeenCalledTimes(2);//alt syntaxt pf above
			expect( spy ).toHaveBeenCalledWith(3);
			expect( spy ).toHaveBeenCalledWith(7);//multiple calls to this matcher do not matter the order, only that it was called with the value once
		});


		it("calls subtract", function(){
			const spy = spyOn(Calculator.prototype, "subtract");

			calculate("3-7");
			// expect( Calculator.prototype.add ).toHaveBeenCalledTimes(2);
			expect( spy ).toHaveBeenCalled();//alt syntaxt pf above
			expect( spy ).toHaveBeenCalledWith(7);
			expect( spy ).not.toHaveBeenCalledWith(3);//thie 1st # is not sent to the method
		});
		it("calls multiply", function(){
			const spy = spyOn(Calculator.prototype, "multiply");

			calculate("3*8");
			// expect( Calculator.prototype.add ).toHaveBeenCalledTimes(2);
			expect( spy ).toHaveBeenCalled();//alt syntaxt pf above
			expect( spy ).toHaveBeenCalledWith(8);
			expect( spy ).not.toHaveBeenCalledWith(3);
		});
		it("calls divide", function(){
			const spy = spyOn(Calculator.prototype, "divide");

			calculate("8/4");
			// expect( Calculator.prototype.add ).toHaveBeenCalledTimes(2);
			expect( spy ).toHaveBeenCalled();//alt syntaxt pf above
			expect( spy ).toHaveBeenCalledWith(4);
			expect( spy ).not.toHaveBeenCalledWith(8);
		});
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