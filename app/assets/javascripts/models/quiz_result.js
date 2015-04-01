Rehearsable.Models.QuizResult = Backbone.Model.extend({
  urlRoot: '/api/quiz_results',

  answerResults: function () {
		this._answerResults = this._answerResults ||
		  new Rehearsable.Collections.AnswerResults([], { quiz_result: this });
		return this._answerResults;
	},

  saveAnswerResults: function () {
  	this.answerResults().each(function(answerResult) {
  		answerResult.save({ quiz_result_id: this.id });
  	}, this);
  }
});