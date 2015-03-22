Rehearsable.Collections.Answers = Backbone.Collection.extend({
    model: Rehearsable.Models.Answer,
	
	url: this.question.url() + "/answers"

	initialize: function (models, options) {
		this.question = options.question
	}
})