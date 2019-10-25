//jasmine.github.io/api/x.y/matchers.html will list all matchersin version x.y

describe("calculator.js", function(){
	
	describe("Calculator", function(){
		let calc1, calc2;//Make available/shared in all test specs

		beforeEach(function(){
			//executed before each spec
			calc1 = new Calculator();//set/reset before each test
			calc2 = new Calculator();
		});

		afterEach(function(){
			//executes after each spec in the describe
		})



		it('can be instantiated', function(){
			jasmine.addMatchers( customMatchers );
			
			const calc1 = new Calculator();
			const calc2 = new Calculator();

			expect( calc1 ).toBeTruthy();
			expect( calc2 ).toBeTruthy();
			
			// expect( c1 ).toBe( c2 );//will fail as two unique objects
			expect( calc1 ).toEqual( calc2 );//will pass as two key <=> key matching objects
			expect( calc1.constructor.name ).toContain("Calc");
			//custom matcher
			expect( calc1 ).toBeCalculator();
		});


		it('instantiates a unique object', function(){
			expect( calc1 ).toBeTruthy();
			expect( calc2 ).toBeTruthy();
			
			expect( calc1 ).not.toBe( calc2 );//will pass as two unique objects
			// expect( calc1 ).not.toEqual( calc2 );//will fail as two key <=> key matching objects
		});


		it("should initialize the total as the number 0", function(){
			expect( calc1.total ).toBe(0);
		});


		it("can overwrite its total", function(){
			calc1.total = null;
			expect( calc1.total ).toBeNull();

		});


		it("has add, subtract, multiply, & divide operations", function(){
			// expect( calc1.add ).not.toBeUndefined();
			// expect( calc1.subtract ).not.toBeUndefined();
			// expect( calc1.multiply ).not.toBeUndefined();
			// expect( calc1.divide ).not.toBeUndefined();
			//logically equivalient & more succinct
			expect( calc1.add ).toBeDefined();
			expect( calc1.subtract ).toBeDefined();
			expect( calc1.multiply ).toBeDefined();
			expect( calc1.divide ).toBeDefined();

		});

		
		describe('add()', function(){
			
			it("should add numbers to total", function(){
				calc1.add(5);
				//we expect the total to be 5 now
				expect( calc1.total ).toBe(5);
			});
		
			it("returns the total", function(){
				calc1.total = 10;
	
				expect(calc1.add(10)).toBe(20);
				expect(calc1.total).toMatch(/-?\d+/);
				expect(typeof calc1.total).toMatch("number");
	
				expect( calc1.total).toBeNumber();//not defined, but seems like it would be
				//Add jasmin-matchers to bring this & a lot of others in
	
				expect(calc1.total).toEqual(jasmine.anything());//will match anything except null & undefined
			});
		
		});


		describe("subtract()", function(){

			it("should subtract() numbers from the total", function(){
				calc1.total = 20;
				calc1.subtract( 10 );
				expect( calc1.total ).toBe( 10 );
			}); 
		});



		describe("multiply()", function(){

			it("should multiply() the total by a number", function(){
				calc1.total = 10;
				calc1.multiply( 2 );
				expect( calc1.total ).toBe( 20 );
			}); 


			it("does not handle NaN", function(){
				calc1.total = 12;
				calc1.multiply("a");
				expect(calc1.total).toBeNaN();

			});

		});



		describe("divide()", function(){

			it("should divide() the total by a number", function(){
				calc1.total = 30;
				calc1.divide( 2 );
				expect( calc1.total ).toBe( 15 );
			}); 

	
			it("handles dividing by zero by throwing an error", function(){
				calc1.total = 30;
				// expect( calc.divide(0) ).toThrow()//will not work as desired, will throw the error & fail the test
				expect( function(){//generic test
					calc1.divide(0)
				}).toThrow();
				expect(function(){//More specific test of thrown type
					calc1.divide(0)
				}).toThrowError(Error)
				expect(function(){//match error type & message
					calc1.divide(0)
				}).toThrowError(Error, "Cannot divide by zero.");//Error message must be an exact match
			});
	
		});

		describe("get version", function(){
			//will work sometimes due to caching, but the async nature will cause the test to run before it's returned sometimes
			//failures aren't reflected well here since the json is local
			// it("fetches version from an external source", function(){
			// 	calc1.version.then( function(version){
			// 		expect( version ).toBe("0.1");
			// 	})
			// })
			it("fetches version from an external source", function(done){//for async you declare this & jasmine will provide it
				calc1.version.then( function(version){
					expect( version ).toBe("0.1");
					done();//let jasmine know that the test is actually done now.
					//if you dont call it after injecting it, the test will timeout
				})
			})
		})

	});//Calculator
	
});