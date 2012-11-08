(function (){
	var root = this;
	define('jquery', [], function () { return root.$; });
	define('amplify', [], function () { return root.amplify; });
	define('toastr', [], function () { return root.toastr; });

	require(['app/mocks/mock.ds.customers'], function (ds) {
		var callbacks = {
			success : function(result) {
				alert(result);
			},
			error : function(error, status) {
				// aqui, tratamento caso algo ocorra de...
			}
		};

		ds.getCustomers(callbacks);
	});
})();

