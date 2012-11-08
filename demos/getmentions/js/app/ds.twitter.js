define(['amplify'],
	function (amplify) {
		var
			mentionsDecoder = function(
				data, 
				status, 
				xhr, 
				success,
				error) {

				if (status === "success") {
		            success( data.results );
		        } else if ( status === "fail" || status === "error" ) {
		            error( data.message, data.status );
		        } else {
		            error( data.message , "fatal" );
		        }
			},

			init = function() {
				amplify.request.define( "twitter-mentions", "ajax", {
				    url: "http://search.twitter.com/search.json",
				    dataType: "jsonp",
				    dataMap: function( parameters ) {
				        return {
				            q: "@" + parameters.user
				        };
				    },
				    decoder : mentionsDecoder
				});
			},

			getMentions = function(callbacks, nick) {
				amplify.request(
				{
					resourceId: "twitter-mentions",
					data: { user: nick },
					success: callbacks.success,
					error: callbacks.error
				});
			};

		init();

		return {
			getMentions : getMentions
		};
	});