Rehearsable.Views.answerShow = Backbone.View.extend({
	template: JST['answer/show'],

	render: function(){
		var content = this.template({ answer: this.model });
        this.$el.html(content);
		return this;
	}
})