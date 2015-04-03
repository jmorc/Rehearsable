Rehearsable.Views.quizResultShow = Backbone.View.extend({
	template: JST['quiz_result/show'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
		var content = this.template({ 
			quizResult: this.model,
			quiz: this.model.quiz(),
			questions: this.model.questions(),
			answerResults: this.model.answerResults()
		});

		this.$el.html(content);
		return this;
	}
})