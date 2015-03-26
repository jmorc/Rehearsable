Rehearsable.Collections.Quizzes = Backbone.Collection.extend({
	model: Rehearsable.Models.Quiz,
	url: 'api/quizzes',

	getOrFetch: function(id){
    var quiz
    quizzes = this;
    if (quiz = this.get(id)) {
      quiz.fetch();
    } else {
      quiz = new Rehearsable.Models.Quiz({ id: id }) 
      quiz.fetch({ 
        success: function(){
          quizzes.add(quiz);
        }
      });
    }

    return quiz;
  },
})

Rehearsable.Collections.quizzes = new Rehearsable.Collections.Quizzes();