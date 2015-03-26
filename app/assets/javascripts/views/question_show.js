Rehearsable.Views.questionShow = Backbone.View.extend({
  template: JST['question/show'],

  render: function() {
    var content = this.template({ question: this.model });
    this.$el.html(content);
  	return this;
  }
});