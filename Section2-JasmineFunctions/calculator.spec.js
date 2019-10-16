describe("calculator.js", function(){

	//jasmine.github.io/api/x.y/matchers.html will list all matchersin version x.y
	

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
		const calc1 = new Calculator();
		const calc2 = new Calculator();
		
		expect( calc1 ).toBeTruthy();
		expect( calc2 ).toBeTruthy();
		
		expect( calc1 ).not.toBe( calc2 );//will pass as two unique objects
		// expect( calc1 ).not.toEqual( calc2 );//will fail as two key <=> key matching objects
	});


	it("does not handle NaN", function(){
		const calc = new Calculator();
		calc.total = 12;
		calc.multiply("a");
		expect(calc.total).toBeNaN();

	})

	it("has add, subtract, multiply, & divide operations", function(){
		const calc = new Calculator();

		// expect( cal.add ).not.toBeUndefined();
		// expect( cal.subtract ).not.toBeUndefined();
		// expect( cal.multiply ).not.toBeUndefined();
		// expect( cal.divide ).not.toBeUndefined();
		//logically equivalient & more succinct
		expect( calc.add ).toBeDefined();
		expect( calc.subtract ).toBeDefined();
		expect( calc.multiply ).toBeDefined();
		expect( calc.divide ).toBeDefined();

	})

	it("should initialize the total as the number 0", function(){
		const calc = new Calculator();
		expect( calc.total ).toBe(0);
	})

	it("can overwrite its total", function(){
		const calc = new Calculator();
		calc.total = null;
		expect( calc.total ).toBeNull();

	});

	
	it("should add() numbers to total", function(){
		const calc = new Calculator();
		calc.add(5);
		//we expect the total to be 5 now
		expect( calc.total ).toBe(5);
	});
	
	it("should subtract() numbers from the total", function(){
		const calc = new Calculator();
		calc.total = 20;
		calc.subtract( 10 );
		expect( calc.total ).toBe( 10 );
	}); 

	it("should multiply() the total by a number", function(){
		const calc = new Calculator();
		calc.total = 10;
		calc.multiply( 2 );
		expect( calc.total ).toBe( 20 );
	}); 

	it("should divide() the total by a number", function(){
		const calc = new Calculator();
		calc.total = 30;
		calc.divide( 2 );
		expect( calc.total ).toBe( 15 );
	}); 

	it("handles dividing by zero by throwing an error", function(){
		const calc = new Calculator();
		calc.total = 30;
		// expect( calc.divide(0) ).toThrow()//will not work as desired, will throw the error & fail the test
		expect( function(){//generic test
			calc.divide(0)
		}).toThrow();
		expect(function(){//More specific test of thrown type
			calc.divide(0)
		}).toThrowError(Error)
		expect(function(){//match error type & message
			calc.divide(0)
		}).toThrowError(Error, "Cannot divide by zero.");//Error message must be an exact match
	});

	it("returns the total", function(){
		let calc = new Calculator();
		calc.total = 10;

		expect(calc.add(10)).toBe(20);
		expect(calc.total).toMatch(/-?\d+/);
		expect(typeof calc.total).toMatch("number");

		expect( calc.total).toBeNumber();//not defined, but seems like it would be
		//Add jasmin-matchers to bring this & a lot of others in

		expect(calc.total).toEqual(jasmine.anything());//will match anything except null & undefined
	});



		
	
});