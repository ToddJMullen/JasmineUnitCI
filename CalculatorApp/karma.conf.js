process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function(config){
	config.set({
		frameworks: ["jasmine","jasmine-matchers"]
		,files: [//order matters here
			"./custom-matchers.js"
			,"*.js"
			,"*.spec.js"
		]
		,plugins: ["karma-jasmine","karma-jasmine-matchers","karma-chrome-launcher"]
		,reporters: ["dots"]
		// ,reporters: ["progress"]
		,color: true
		,browsers: ["ChromeHeadless"]
		,singleRun: true
	})
}