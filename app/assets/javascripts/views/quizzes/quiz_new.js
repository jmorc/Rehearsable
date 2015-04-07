Rehearsable.Views.quizNew = Backbone.View.extend({
	template: JST['quiz/new'],

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})