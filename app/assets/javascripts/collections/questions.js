Rehearsable.Collections.Questions = Backbone.Colletion.extend({
	model: Rehearsable.Models.Question,

	url: this.quiz.url() + '/questions', 

	initialize: function (models, options) {
      this.quiz = options.quiz;
	}
})