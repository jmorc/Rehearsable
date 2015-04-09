Rehearsable.Views.questionNew = Backbone.View.extend({
	template: JST['question/new'],

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});