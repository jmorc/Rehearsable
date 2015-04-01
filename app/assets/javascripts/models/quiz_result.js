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
  },

  quiz: function() {
    // should equal a new quiz if there is no quiz_id

    var id = this.get("quiz_id")

    if (typeof id === "undefined") {
      this._quiz = new Rehearsable.Models.Quiz()
    } else {
      this._quiz = Rehearsable.Collections.quizzes.getOrFetch(id)
    }

    return this._quiz;
  }
  
});