Rehearsable.Views.quizResultShow = Backbone.View.extend({
	template: JST['quiz_result/show'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render)
		this.listenTo(this.model.quiz(), "sync", this.render)
	},

	render: function() {
		var content = this.template({ 
			quiz_result: this.model
		});
		this.$el.html(content);

        var quiz = this.model.quiz();

        console.log(quiz)

       
		return this;
	}
})