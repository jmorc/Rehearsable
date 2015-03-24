window.Rehearsable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function (options) {
  	new Rehearsable.Routers.Router({
  		$rootEl: $("#main")
  	});
  	Backbone.history.start();
  }
};

$(Rehearsable.initialize)