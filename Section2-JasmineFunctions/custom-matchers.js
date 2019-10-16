const customMatchers = {//must be registered before it can be used
	toBeCalculator: function(){
		return {
			compare: function(actual){
				const result = {
					pass: actual instanceof Calculator
					,message: ""
				}
				//the pass/fail messages are constructed strange bc on pass/fail for normal & not (4 total)
				if( result.pass ){//this message is used for failing 'not' comparison
					result.message = `Expected ${actual} not to be an instance of Calculator`
				}
				else {//this message is used for success
					result.message = `Expected ${actual} to be an instance of Calculator`
				}
				return result;
			}
		}
	}
}