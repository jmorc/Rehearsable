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
    // needs a quiz
    // this gives access to questions and answers

    var newQuizResult = new Rehearsable.Models.QuizResult({
    	quiz: this.quiz
    });

    for (question_code in params) {
    	var questionID = parseInt(question_code.toString().split(" ")[1], 10);
    	var this_question = this.quiz.question(questionID);
    	this_question.answers().each(function(answer) {
    		var answer_result = new Rehearsable.Models.AnswerResult({
    			answer_id: 1,
    			quiz_result_id: 1,
    			question_id: 1
    		});
    		answer_result.save();
    	}) 

    	
    	// var studentAnswer = params[question_code]; // this is an array of length 1 or more
     //    var correct = this_question.isCorrect(studentAnswer);
        
    };
    
    // save newQuizResult, with all the answerResults
    // render the newQuizResult show
  },


});