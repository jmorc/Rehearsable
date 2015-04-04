Rehearsable.Models.QuizResult = Backbone.Model.extend({
  urlRoot: '/api/quiz_results',

  answerResults: function () {
		this._answerResults = this._answerResults ||
		  new Rehearsable.Collections.AnswerResults([], { quizResult: this });
		return this._answerResults;
	},

  questions: function () {
    this._questions = this._questions ||
      new Rehearsable.Collections.Questions([], { quiz: this });
    return this._questions;
  },

  saveAnswerResults: function () {
  	this.answerResults().each(function(answerResult) {
  		answerResult.save({ quiz_result_id: this.id });
  	}, this);
  },

  quiz: function() {
    this._quiz = this._quiz ||
      new Rehearsable.Models.Quiz()
    return this._quiz
  },

  parse: function(payload) {
    
    if (payload.quiz) {
      console.log('parsing quiz')
      this.quiz().set(payload.quiz, { parse: true });
      delete payload.quiz;
    }

    if (payload.questions) {
      console.log('parsing questions')
      this.questions().set(payload.questions, { parse: true });
      delete payload.questions;
    }

    if (payload.answer_results) {
      console.log('parsing answer results')
      this.answerResults().set(payload.answer_results, { parse: true });
      delete payload.answer_results;
    }

    return payload;
  }
});