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
		let element;
		beforeAll(function(){
			//run once before all the tests
			element = document.createElement("div");
			element.setAttribute("id", "result"); 
			document.body.appendChild(element);
		})
		afterAll(function(){
			// const element = document.getElementById("result");
			document.body.removeChild(element); 
		})
		
		it("adds result to DOM element", function(){
			// const element = document.createElement("div");
			updateResult("5"); 
			expect( element.innerText ).toBe("5");

		})
		
	});



});