Rehearsable.Views.answerNew = Backbone.View.extend({
	template: JST['answer/new'],

	events: {
		"submit form.newAnswerForm" : "submitNewAnswer"
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	initialize: function(options) {
		this.question = options.question;
	},

	submitNewAnswer: function(event) {
      	event.preventDefault();
      	var params = $(event.currentTarget).serializeJSON();
      	var answer = new Rehearsable.Models.Answer();
      	
      	params.answer.question_id = this.question.id;
      	answer.set(params['answer']);
      	answer.save();
      	this.question.answers().add(answer);
      	this.question.trigger('sync');
    }
});