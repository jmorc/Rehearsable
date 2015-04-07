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
      var answerCount = 0;
    	var studentAnswers = params[questionCode];
    	var questionID = parseInt(questionCode.toString().split(" ")[1], 10);
    	var thisQuestion = this.quiz.question(questionID);

      console.log("Grading question, id: " + questionID.toString())

    	thisQuestion.answers().each(function(answer) {
        answerCount += 1
        console.log("Checking answer number " + answerCount.toString())
        console.log("Total number of answerResults " + answerResults.length.toString())
        // loop through all 10 checkbox answers
    		var answerResult = new Rehearsable.Models.AnswerResult({
    			answer_id: answer.id,
    			question_id: questionID
    		});

    		if (typeof studentAnswers === "string") {
    			studentAnswers = [studentAnswers];
    		}

  //loop through all the answers selected by student
        var studentSelected = false;

    		studentAnswers.forEach(function(studentAnswer) {
          
    			if (studentAnswer === answer.escape("body")) {
            studentSelected = true; 
  // if it is a correct answer, and the student selected it
  // the student gets it right.
            if (answer.escape('correct') === 'true') {
    			    var selected = true;
    			    var correct = true;	
    			  } else {
  // if it is an incorrect answer, and the student selected it
  // the student gets it wrong
    			    var selected = true;
    			    var correct = false;
    			  }
            answerResult.set("correct", correct);
            answerResult.set("selected", selected);
            answerResults.push(answerResult);
          }
        });
          
        if (!studentSelected) {
  // if the student didn't select it, and the answer is correct
  // the student gets it wrong
          if (answer.escape('correct') === 'true') {
              var selected = false;
              var correct = false; 
            } else {
  // if the student didn't select it, and the answer is wrong,
  // the student gets it right.
              var selected = false;
              var correct = true;
            }
          answerResult.set("correct", correct);
          answerResult.set("selected", selected);
          answerResults.push(answerResult);
    		} 
      }); // end loop through all answers
    } // end loop through questions

    var newQuizResult = new Rehearsable.Models.QuizResult({ 
    	quiz_id: this.quiz.id
    });

    newQuizResult.save([], {
    	success: function(response) {
        answerResults.forEach(function(answerResult){
          answerResult.save({"quiz_result_id": this.id})
        }, response)

    		var url = "quiz_result/" + response.id.toString();
    		Backbone.history.navigate(url, { trigger: true });
    	}
    });
 }
});