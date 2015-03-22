Rehearsable.Collections.Quizzes = Backbone.Collection.extend({
	model: Rehearsable.Models.Quiz,
	url: 'api/quizzes' 
})

Rehearsable.Collections.quizzes = new Rehearsable.Collections.Quizzes();