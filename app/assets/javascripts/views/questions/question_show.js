Rehearsable.Views.questionShow = Backbone.View.extend({
  template: function(){ 
  	return this.open ? JST['question/edit'] : JST['question/show'];
  },

  events: {
  	"click .questionEdit" : "openQuestionEdit",
  	"submit form.submitQuestion" : "submitQuestionEdit",
    "click .questionDelete" : "deleteQuestion"
  },

  render: function() {
    var content = this.template()({ question: this.model });
    this.$el.html(content);
  	return this;
  },

  intitialize: function(options){
  	this.open = options.open || false;
  },

  openQuestionEdit: function() {
  	this.open = true;
  	this.render();
  },

  submitQuestionEdit: function(event) {
	  event.preventDefault();
	  this.open = false;
	  var params = $(event.currentTarget).serializeJSON();
	  this.model.set(params['question']);
	  this.render(); 
  },

  deleteQuestion: function() {
    debugger
    this.model.destroy()
  }
});