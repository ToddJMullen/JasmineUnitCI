module.exports = function(config){
	config.set({
		frameworks: ["jasmine","jasmine-matchers"]
		,files: [//order matters here
			"./custom-matchers.js"
			,"*.js"
			,"*.spec.js"
		]
		,plugins: ["karma-jasmine","karma-jasmine-matchers"]
		,reporters: ["dots"]
		// ,reporters: ["progress"]
		,color: true
		,singleRun: true
	})
}