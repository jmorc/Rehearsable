Rehearsable.Models.QuizResult = Backbone.Model.extend({
  urlRoot: '/api/quiz_results',

  answerResults: function () {
		this._answerResults = this._answerResults ||
		  new Rehearsable.Collections.AnswerResults([], { quizResult: this });
		return this._answerResults;
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

    if (payload.answer_results) {
      console.log('parsing answer results')
      this.answerResults().set(payload.answer_results, { parse: true });
      delete payload.answer_results;
    }

    return payload;
  }

  // quiz: function() {
  //   // should equal a new quiz if there is no quiz_id
  //   if (typeof this._quiz !== "undefined") {
  //     console.log(this._quiz);
  //     if (typeof this._quiz.get("title") !== "undefined") {
  //       return this._quiz;
  //     }
  //   }

  //   var id = this.get("quiz_id")

  //   if (typeof id === "undefined") {
  //     this._quiz = new Rehearsable.Models.Quiz()
  //   } else {
  //     this._quiz = new Rehearsable.Models.Quiz({ id: id })
  //     this._quiz.fetch({
  //       success: function(response){
  //         response.trigger("sync");
  //       }
  //     })
  //   }

  //   return this._quiz;
  // }

});