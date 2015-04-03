Rehearsable.Models.Quiz = Backbone.Model.extend({
	urlRoot: '/api/quizzes',

	questions: function () {
		this._questions = this._questions ||
		  new Rehearsable.Collections.Questions([], { quiz: this });
		return this._questions;
	},

	question: function(id) {
		var foundQuestion = -1;
		this.questions().models.forEach(function(el) {
			if ( el.id === id ) {
				foundQuestion = el;
			}
		});

        return foundQuestion;
	},

	parse: function(payload) {
		if (payload.questions) {
			console.log('parsing questions')
		  this.questions().set(payload.questions, { parse: true });
		  delete payload.questions;
		}
		return payload;
	}
});