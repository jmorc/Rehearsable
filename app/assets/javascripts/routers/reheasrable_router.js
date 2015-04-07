Rehearsable.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
	routes: {
		"": "quizIndex",
		"quiz/new": "quizNew",
		"quiz/:id": "quizShow",
    "quiz/:id/edit" : "quizEdit",
    "quiz/:id/delete" : "quizDelete",
    "quiz/:id/quiz_result/new": "quizResultNew",
    "quiz_result/:id": "quizResultShow"
	},
   
  quizIndex: function () {
    Rehearsable.Collections.quizzes.fetch();
    var indexView = new Rehearsable.Views.quizIndex({
      collection: Rehearsable.Collections.quizzes
    });

    this.$rootEl.html(indexView.render().$el);
  },

  quizEdit: function(id) {
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
    var editView = new Rehearsable.Views.quizEdit({
      model: quiz
    })
    this.$rootEl.html(editView.render().$el);
  },

  quizNew: function(id) {
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
    var editView = new Rehearsable.Views.quizNew();
    this.$rootEl.html(editView.render().$el);
  },

  quizDelete: function(id) {
    var quiz = Rehearsable.Collections.quizzes.getOrFetch(id);
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
  },

  quizResultShow: function(id) {
    var quizResult = new Rehearsable.Models.QuizResult({ id: id })
    quizResult.fetch()
    var quizResultShowView = new Rehearsable.Views.quizResultShow({
      model: quizResult
    });
    this.$rootEl.html(quizResultShowView.render().$el);
  }
})