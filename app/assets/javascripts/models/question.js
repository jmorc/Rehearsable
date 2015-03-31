Rehearsable.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions',

  answers: function() {
    this._answers = this._answers ||
      new Rehearsable.Collections.Answers([], { question: this });
    return this._answers;
  },

  correctAnswers: function() {
    var correct = []
    this.answers().each(function(answer){
      if (answer.get("correct")) {
        correct.push(answer);
      }
    });

    return correct;
  },

  isCorrect: function(answer_body) {
    var correct = false;
    this.correctAnswers().forEach(function(correct) {
      if (correct.escape("body") === answer_body) {
        correct = true;
      }
    });

    return correct;
  },

  parse: function(payload) {
	  if (payload.answers) {
	      this.answers().set(payload.answers, { parse: true });
	      delete payload.answers;
	  }

	  return payload;
  }
});