Rehearsable.Collections.QuizResults = Backbone.Collection.extend({
   model: Rehearsable.Models.QuizResult,

   url: function() {
   	return this.quiz.url() + '/quiz_results'
   },

   initialize: function(model, options) {
   	this.quiz = options.quiz
   }

})