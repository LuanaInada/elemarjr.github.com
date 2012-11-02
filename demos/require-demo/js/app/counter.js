define('js/app/counter',
	['js/app/logger'], 
	function (logger) {
		var 
			_c = 0,
			increment = function () {
				logger.log("incrementing counter to " + ++_c);
				return _c;
			},
			decrement = function() {
				logger.log("decrementing counter to " + --_c);
				return _c;
			},
			reset = function() {
				logger.log("reseting counter");
				return (_c = 0);
			};

		return {
			increment : increment,
			decrement : decrement,
			reset : reset
		};
	});
