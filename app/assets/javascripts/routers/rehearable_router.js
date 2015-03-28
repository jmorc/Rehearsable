Rehearsable.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
	routes: {
		"": "quizIndex",
		"quiz/new": "quizNew",
		"quiz/:id": "quizShow",
    "quiz/:id/quiz_result/new": "quizResultNew"
	},
   
  quizIndex: function () {
    Rehearsable.Collections.quizzes.fetch();
    var indexView = new Rehearsable.Views.quizIndex({
      collection: Rehearsable.Collections.quizzes
    });

    this.$rootEl.html(indexView.render().$el);
  },

  quizShow: function (id) {
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
    var showView = new Rehearsable.Views.quizShow({
    	model: quiz 
    });
    this.$rootEl.html(showView.render().$el);
  },

  quizResultNew: function(id) {
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
    var newView = new Rehearsable.Views.quizResultNew({ quiz: quiz });
    this.$rootEl.html(newView.render().$el);
  }
})