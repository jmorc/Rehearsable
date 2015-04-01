Rehearsable.Collections.AnswerResults = Backbone.Collection.extend({
    model: Rehearable.Models.AnswerResults,

    initialize: function(options) {
    	this.quiz_result = options.quiz_result
    }

	url: function() {
		return this.quiz_result.url + "/answer_results"
	}
})