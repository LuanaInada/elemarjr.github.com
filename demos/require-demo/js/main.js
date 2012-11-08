(function (){
	var root = this;
	define('jquery', [], function () { return root.$; });
	define('toastr', [], function () { return root.toastr; });
	define('./logger', ['toastr'], function(toastr) {
		return {
			log : function(message)
			{
				toastr.success(message);
			}
		}
	} )

	$('#incrementButton').click(function() {
		require(['app/counter'], function(c) {
			c.increment();
		});
	});

	$('#decrementButton').click(function() {
		require(['app/counter'], function(c) {
			c.decrement();
		});
	});

	$('#resetButton').click(function() {
		require(['app/counter'], function(c) {
			c.reset();
		});
	});
})();

