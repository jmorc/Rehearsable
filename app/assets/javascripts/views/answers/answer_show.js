Rehearsable.Views.answerShow = Backbone.View.extend({
	template: function(answer) {
		if (this.model.question.escape('question_type') === 'radio') {
			this._template = JST['answer/show_radio'];
		}

		if (this.model.question.escape('question_type') === 'checkbox') {
			this._template = JST['answer/show_checkbox'];
		}

		return this._template({ answer: answer });
	},

	render: function(){
		var content = this.template(this.model);
        this.$el.html(content);
		return this;
	}
})