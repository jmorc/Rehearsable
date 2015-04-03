Rehearsable.Views.quizResultShow = Backbone.View.extend({
	template: JST['quiz_result/show'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render)
		// this.listenTo(this.model.quiz(), "sync change all", this.render)
	    // this.listenTo(this.model._quiz, "sync change all", this.render)
	},

	render: function() {
		// var quiz = this.model.quiz();
  //       quiz.fetch({
  //       	success: function(response) {
  //       		console.log(response)
  //       	}
  //       });
  //       var questions = quiz.questions();

		var content = this.template({ 
			quiz_result: this.model,
		});

		this.$el.html(content);
		return this;
	}
})