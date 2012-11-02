define('logger',
	['jquery', 'toastr'], 
	function ($, toastr) {
		var 
			logJquery = function (message) {
				var elem = $("<li>" + message + "</li>");
				$("#output").append(elem);
			},

			logToastr = function (message) {
				toastr.success(message);
			},

			log = function(message) {
				logJquery(message);
				logToastr(message);
			}
		return {
			log : log,
		};
	});
