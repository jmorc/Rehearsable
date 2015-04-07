Rehearsable.Views.quizNew = Backbone.View.extend({
	template: JST['quiz/new'],

	events: {
		'submit form': 'submitNewQuiz'
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	submitNewQuiz: function(event){
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON();

		var newQuiz = new Rehearsable.Models.Quiz(params);

		newQuiz.save([], {
			success: function(response){
			  console.log("new quiz saved");
		    }
		});
	}
});