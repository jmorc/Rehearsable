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

    // make new answered_questions here?
    // need useful names for inputs
    // see if the data from params can be used to make them?
    var newQuizResult = new Rehearsable.Models.QuizResult({
    	quiz: this.quiz
    });

    var paramsLength = params.answered_questions.length

    for (var i = 0; i < paramsLength; i++) {
    	if (params.answered_questions[i] !== undefined) {
          // Build a answered question object for question i
    	}
    };
    

  },


});