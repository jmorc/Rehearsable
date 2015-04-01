Rehearsable.Collections.AnswerResults = Backbone.Collection.extend({
    model: Rehearsable.Models.AnswerResults,

    initialize: function(models, options) {
    	this.quiz_result = options.quiz_result
    },

	url: function() {
		return this.quiz_result.url + "/answer_results"
	}
})