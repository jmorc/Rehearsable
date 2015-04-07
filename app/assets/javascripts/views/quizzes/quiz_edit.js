Rehearsable.Views.quizEdit = Backbone.View.extend({
  template: JST['quiz/edit'],

  render: function(){
  	var content = this.template({ quiz: this.model });
  	this.$el.html(content);
  	return this;
  }

})