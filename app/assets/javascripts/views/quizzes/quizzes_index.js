Rehearsable.Views.quizIndex = Backbone.View.extend({
  template: JST['quiz/index'],
  
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function() {
    var content = this.template({ quizzes: this.collection });
  	this.$el.html(content);
  	return this;
  }

})