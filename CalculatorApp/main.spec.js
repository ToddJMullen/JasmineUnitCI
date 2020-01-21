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
			// expect( spy ).toHaveBeenCalledTimes(2);//alt syntaxt pf above
			// expect( spy ).toHaveBeenCalledWith(3);
			// expect( spy ).toHaveBeenCalledWith(7);//multiple calls to this matcher do not matter the order, only that it was called with the value once
			//alternate more verbose / explicit syntax. Still requires the spyOn() at the top (but not the spy var) 
			expect( Calculator.prototype.add ).toHaveBeenCalledTimes(2);
			expect( Calculator.prototype.add ).toHaveBeenCalledWith(3);
			expect( Calculator.prototype.add ).toHaveBeenCalledWith(7);
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
		
		it("calls updateResult (example using and.callThrough)", function(){
			//used when testing that a function is called by your code, but you're not testing the function that is called
			//only that is was called by your method
			spyOn( window, "updateResult" );
			spyOn( Calculator.prototype, "multiply" ).and.callThrough();

			calculate("5*5");
			
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith(25);
		});
		
		it("calls updateResult (example using and.callFake)", function(){
			//used when testing that a function is called by your code, but you're not testing the function that is called
			//only that is was called by your method
			spyOn( window, "updateResult" );
			spyOn( Calculator.prototype, "multiply" ).and.callFake(function(number){
				return 'fake results!';
			});

			calculate("5*5");
			
			expect( window.updateResult ).toHaveBeenCalled();
			// expect( window.updateResult ).toHaveBeenCalledWith(25);//it would fail because  we've given a different fake implementation to use
			expect( window.updateResult ).toHaveBeenCalledWith("fake results!")
		});
		
		it("calls updateResult (example using and.returnValue)", function(){
			const fakeValue = "random test returned value"
			spyOn( window, "updateResult" );
			spyOn( Calculator.prototype, "multiply" ).and.returnValue( fakeValue );

			calculate("5*5");
			
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith( fakeValue );
		});
		
		it("calls updateResult (example using and.returnValues)", function(){
			const fakeValue = "random test returned value"
			spyOn( window, "updateResult" );
			spyOn( Calculator.prototype, "add" ).and.returnValues("1st","2nd value add returns");

			calculate("5+5");
			
			expect( window.updateResult ).toHaveBeenCalled();
			expect( window.updateResult ).toHaveBeenCalledWith( "2nd value add returns" );
		});

		it("does not handle errors", function(){
			spyOn( Calculator.prototype, "multiply").and.throwError("fake error");

			expect( function(){ calculate("5*5") } ).toThrowError("fake error")
		})

		//Could not get this to work as expected
		// it("throws errors for unknown operations", function(){
		// 	const s = spyOn( window, "calculate")//.and.throwError("fake error");

		// 	calculate("5,5") 
		// 	expect( function(){calculate("8p9") } ).toThrowError("Unknown operation")
		// })
		
		
	});//calculate() suite



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

	describe('showVersion()', function(){
		// it('calls calculator.version', function(){
		// 	spyOn( document, "getElementById").and.returnValue({
		// 		innerText: null
		// 	});

		// 	// spyOn( Calculator.prototype, 'version' );//it will not work
		// 	const spy = spyOnProperty( Calculator.prototype, 'version', 'get' );//use this method to spy on property with getter

		// 	showVersion();
		// 	//does not work bc version becomes undefined when the spy is sinstalled
		// 	// expect( Calculator.prototype.version ).toHaveBeenCalled()
			
		// 	//this version works, but is very verbose
		// 	// expect(
		// 	// 	 Object.getOwnPropertyDescriptor( Calculator.prototype, "version" ).get 
		// 	// ).toHaveBeenCalled();

		// 	//this is the recommended syntax for spying on a property & a reason to use the variable spy reference
		// 	expect( spy ).toHaveBeenCalled();

		// })

		it('calls calculator.version', function(){
			spyOn( document, "getElementById").and.returnValue({
				innerText: null
			});

			// spyOn( Calculator.prototype, 'version' );//it will not work
			const spy = spyOnProperty( Calculator.prototype, 'version', 'get' ).and.returnValue( Promise.resolve(//or reject
				new Response(`{"version":"0.1"}`)
			));

			showVersion();

			expect( spy ).toHaveBeenCalled();

		})
	});

});