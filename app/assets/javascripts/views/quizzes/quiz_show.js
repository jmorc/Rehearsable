Rehearsable.Views.quizShow = Backbone.View.extend({
  template: JST['quiz/show'],

  initialize: function () {
  	this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
  	var content = this.template({ quiz: this.model });
    this.$el.html(content);
    return this
  } 
})