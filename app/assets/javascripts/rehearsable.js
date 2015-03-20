window.Rehearsable = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  initialize: function (options) {
  	new Rehearsable.Routers.Router({
  		$rootEl = $("main")
  	});
  	Backbone.history.start();
  }
};

$(Rehearsable.initialize)