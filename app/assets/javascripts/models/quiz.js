Rehearsable.Models.Quiz = Backbone.Model.extend({
	urlRoot: '/api/quizzes',

	questions: function () {
		this._questions = this._questions ||
		  new Rehearsable.Collections.Questions([], { quiz: this });
		return this._questions;
	},

	parse: function(payload) {
		if (payload.questions) {
		  this.questions().set(payload.question, { parse: true });
		  delete payload.questions
		}
		return payload;
	}
});