Rehearsable.Views.quizResultShow = Backbone.View.extend({
	template: JST['quiz_result/show'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
        var questions = this.model.questions();
        var answerResults = this.model.answerResults();

		var content = this.template({ 
			quizResult: this.model,
			quiz: this.model.quiz(),
		});
		this.$el.html(content);

      questions.each(function(question){
        var questionShow = new Rehearsable.Views.questionShow({
      	  model: question
        })
        $('.questions').append(questionShow.render().$el)

      // question.answers().each(function(answer){
      //   answer.question = question;
      //   var answerShow = new Rehearsable.Views.answerShow({
      //     model: answer
      //   })
      //   $('.questions').append(answerShow.render().$el)
      // })
    });

		return this;
	}
})