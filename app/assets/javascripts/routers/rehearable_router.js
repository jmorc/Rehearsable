Rehearsable.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
	routes: {
		"": "quizIndex",
		"quiz/new": "quizNew",
		"quiz/:id": "quizShow",
	},
   
  quizIndex: function () {
    Rehearsable.Collections.quizzes.fetch();
    var indexView = new Rehearsable.Views.quizIndex({
      collection: Rehearsable.Collections.quizzes
    });

    this.$rootEl.html(indexView.render().$el);
  },

  quizShow: function (id) {
  	console.log("quizShow called in router")
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
    var showView = new Rehearsable.Views.quizShow({
    	model: quiz 
    });
    this.$rootEl.html(showView.render().$el);
  }
})