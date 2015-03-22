Rehearsable.Collections.Questions = Backbone.Collection.extend({
	model: Rehearsable.Models.Question,

	url: function() {
		return this.quiz.url() + '/questions';
	},

	initialize: function (models, options) {
      this.quiz = options.quiz;
	}
})