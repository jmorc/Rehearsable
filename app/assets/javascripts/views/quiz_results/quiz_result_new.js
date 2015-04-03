Rehearsable.Views.quizResultNew = Backbone.View.extend({
  template: JST['quiz_result/new'],

  events: {
  	'submit form': 'submitQuizResult'
  },

  initialize: function(options) {
  	this.quiz = options.quiz;
  	this.listenTo(this.quiz, "sync", this.render)
  },

  render: function(){
    var content = this.template({ quiz: this.quiz });
    this.$el.html(content);

    this.quiz.questions().each(function(question){
      var questionShow = new Rehearsable.Views.questionShow({
      	model: question
      })
      $('.questions').append(questionShow.render().$el)

      question.answers().each(function(answer){
        answer.question = question;
        var answerShow = new Rehearsable.Views.answerShow({
          model: answer
        })
        $('.questions').append(answerShow.render().$el)
      })
    });

    return this;
  },

  submitQuizResult: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var answerResults = [];

    for (questionCode in params) {
    	var studentAnswers = params[questionCode];
    	var questionID = parseInt(questionCode.toString().split(" ")[1], 10);
    	var thisQuestion = this.quiz.question(questionID);

    	thisQuestion.answers().each(function(answer) {
    		var answerResult = new Rehearsable.Models.AnswerResult({
    			answer_id: answer.id,
    			question_id: questionID
    		});

    		if (typeof studentAnswers === "string") {
    			studentAnswers = [studentAnswers];
    		}

    		studentAnswers.forEach(function(studentAnswer) {
    			if (studentAnswer === answer.escape("body") &&
    				answer.escape('correct')) {
    			  selected = true;
    			  correct = true;	
    			} else if (studentAnswer === answer.escape("body") &&
    				       !answer.escape('correct')) {
    			  selected = true;
    			  correct = false;
    			} else if (answer.escape('correct')) {
    			  selected = false;
    			  correct = false;
    			} else {
    			  selected = false;
    			  correct = true;
    		    }

    			answerResult.set("correct", correct);
    			answerResult.set("selected", selected);
    			answerResults.push(answerResult);
    		}); 
    	});
    }
    
    var newQuizResult = new Rehearsable.Models.QuizResult({ 
    	quiz: this.quiz
    });

    newQuizResult.answerResults().add(answerResults);

    newQuizResult.save([], {
    	success: function(response) {
    		response.saveAnswerResults();
    		var url = "quiz_result/" + response.id.toString();
    		Backbone.history.navigate(url, { trigger: true });
    	}
    });
 }
});