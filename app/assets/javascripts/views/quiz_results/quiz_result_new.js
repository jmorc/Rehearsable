Rehearsable.Views.quizResultNew = Backbone.View.extend({
  template: JST['quiz_result/new'],

  events: {
  	'submit form': 'submitQuizResult'
  },

  gradeQuestion: function(question, studentAnswers) {
    var answerResults = [];
    question.answers().each(function(answer) {
      var answerResult = new Rehearsable.Models.AnswerResult({
        answer_id: answer.id,
        question_id: question.id
      });

      if (typeof studentAnswers === "string") {
        studentAnswers = [studentAnswers];
      }

      var studentSelected = false;
      studentAnswers.forEach(function(studentAnswer) {
        if (studentAnswer === answer.escape("body")) {
          studentSelected = true; 

          if (answer.escape('correct') === 'true') {
            var selected = true;
            var correct = true; 
          } else {
            var selected = true;
            var correct = false;
          }

          answerResult.set("correct", correct);
          answerResult.set("selected", selected);
          answerResults.push(answerResult);
        }

        if (!studentSelected) {
          if (answer.escape('correct') === 'true') {
            var selected = false;
            var correct = false; 
          } else {
            var selected = false;
            var correct = true;
          }

          answerResult.set("correct", correct);
          answerResult.set("selected", selected);
          answerResults.push(answerResult);
        } 
      }); // end loop through all student answers
    });
    
    return answerResults;
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
      });
      questionShow.editable = false;

      $('.questions').append(questionShow.render().$el)

      question.answers().each(function(answer){
        answer.question = question;
        var answerShow = new Rehearsable.Views.answerShow({
          model: answer
        })
       
        answerShow.editable = false;
        $('.questions').append(answerShow.render().$el)
      })
    });

    return this;
  },

  submitQuizResult: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var allAnswerResults = [];

    for (questionCode in params) {
    	var studentAnswers = params[questionCode];
    	var questionID = parseInt(questionCode.toString().split(" ")[1], 10);
    	var question = this.quiz.question(questionID);
      var answerResults = this.gradeQuestion(question, studentAnswers);
      
      allAnswerResults = allAnswerResults.concat(answerResults);
    } 

    var newQuizResult = new Rehearsable.Models.QuizResult({ 
    	quiz_id: this.quiz.id
    });

    newQuizResult.save([], {
    	success: function(response) {
        allAnswerResults.forEach(function(answerResult){
          answerResult.save({"quiz_result_id": this.id})
        }, response)

    		var url = "quiz_result/" + response.id.toString();
    		Backbone.history.navigate(url, { trigger: true });
    	}
    });
 }
});