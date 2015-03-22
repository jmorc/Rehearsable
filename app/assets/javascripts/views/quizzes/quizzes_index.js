Rehearsable.Views.QuizzesIndex = Backbone.View.extend({
  template: JST["quiz/index"],

  render: function() {
    var content = this.template({ quizzes: this.collection });
  	this.$el.html(content);
  	return this;
  }

})