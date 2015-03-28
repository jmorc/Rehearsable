Rehearsable.Views.quizResultNew = Backbone.View.extend({
  template: JST['quiz_result/new'],

  events: {
  	'submit form': 'submitQuizResult'
  },

  initialize: function(options) {
  	this.quiz = options.quiz;
  	this.listenTo(this.quiz, "sync", this.render)
  },

  render: function(){
  	debugger
    var content = this.template({ quiz: this.quiz });
    this.$el.html(content);
    return this;
  },

  submitQuizResult: function(event){
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    // make new answered_questions here?
    // see if the data from params can be used to make them?
    var newQuizResult;


  },


});