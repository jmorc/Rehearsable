Rehearsable.Views.quizResultShow = Backbone.View.extend({
	template: JST['quiz_result/show'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
	  var content = this.template({ 
		  quizResult: this.model,
		  quiz: this.model.quiz(),
	  });
	
	  this.$el.html(content);

	  var questions = this.model.questions();
      questions.each(function(question){
        var questionShow = new Rehearsable.Views.questionShow({
      	  model: question
        });

        questionShow.editable = false;

        $('.questions').append(questionShow.render().$el)
      });

    var answerResults = this.model.answerResults();
    answerResults.each(function(answerResult){
        var answerResultShow = new Rehearsable.Views.answerResultShow({
          model: answerResult
        });
        var questionSelector = '#question' + answerResult.escape('question_id');
        $(questionSelector).append(answerResultShow.render().$el)
    });

		return this;
	}
})