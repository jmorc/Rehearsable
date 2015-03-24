Rehearsable.Collections.Quizzes = Backbone.Collection.extend({
	model: Rehearsable.Models.Quiz,
	url: 'api/quizzes',

	getOrFetch: function(id){
    var quiz = this.get(id);
    quizzes = this;
    if (!quiz) {
      var quiz = new Rehearsable.Models.Quiz({ id: id }) 
      quiz.fetch({ 
        success: function(){
          quizzes.add(quiz);
        }
      });
    } else {
      quiz.fetch();
    }
    return quiz;
  },
})

Rehearsable.Collections.quizzes = new Rehearsable.Collections.Quizzes();