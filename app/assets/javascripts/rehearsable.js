window.Rehearsable = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  initialize: function (options) {
  	// new Rehearsable.Routers.Router({
  	// 	$rootEl: $("main")
  	// });

    var view = new Rehearsable.Views.QuizzesIndex({
      collection: Rehearsable.Collections.quizzes
    });

    Rehearsable.Collections.quizzes.fetch({
      success: function () {
        $("body").append(view.render().$el);
      }
    });
    
  	Backbone.history.start();
  }
};

$(Rehearsable.initialize)