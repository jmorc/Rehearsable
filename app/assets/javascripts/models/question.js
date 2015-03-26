Rehearsable.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions',

  answers: function() {
    this._answers = this._answers ||
      new Rehearsable.Collections.Answers([], { question: this });
    return this._answers;
  },

  parse: function(payload) {
	if (payload.answers) {
	  this.answers().set(payload.answers, { parse: true });
	  delete payload.answers;
	}
	return payload;
  }
});