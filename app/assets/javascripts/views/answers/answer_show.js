Rehearsable.Views.answerShow = Backbone.View.extend({
	template: function() {
      return this.open ? JST['answer/edit'] : JST['answer/show'];
    },

    events: {
     "click .editAnswer" : "openAnswer",
     "submit form.submitAnswer" : "closeAnswer",
     "click .deleteAnswer" : "deleteAnswer"
    },

	render: function(){
		if (this.model.question.escape('question_type') === 'radio') {
			var type = 'radio';
		} else {
			var type = 'checkbox';
		}

		var content = this.template()({ 
			answer: this.model,
			type: type
		});
		
        this.$el.html(content);
		return this;
	},

	initialize: function(options) {
		this.open = options.open || false;
	},

	openAnswer: function() {
		this.open = true;
		this.render();
	},

	closeAnswer: function(event) {
		event.preventDefault;
		this.open = false;
		var params = $(event.currentTarget).serializeJSON();
		this.model.set(params['answer']);
		this.model.save();
		this.render();
	},

	deleteAnswer: function() {
		var question = this.model.question;
		this.model.destroy();
		question.fetch();
	}
})