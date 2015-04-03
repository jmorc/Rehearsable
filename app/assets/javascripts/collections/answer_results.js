Rehearsable.Collections.AnswerResults = Backbone.Collection.extend({
    model: Rehearsable.Models.AnswerResult,

    initialize: function(models, options) {
    	this.quizResult = options.quizResult
    },

	url: function() {
		return this.quizResult.url() + "/answer_results"
	}
})