Rehearsable.Views.answerResultShow = Backbone.View.extend({
	template: JST['answer_result/show'],

	render: function() {
      var content = this.template({ answerResult: this.model });
      this.$el.html(content);
      return this;
	}
})