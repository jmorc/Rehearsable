Rehearsable.Views.quizShow = Backbone.View.extend({
  template: JST['quiz/show'],

  initialize: function () {
  	this.listenTo(this.model, "sync add", this.render)
  	this.listenTo(this.model.questions(), "sync", this.render)
  },

  render: function() {
  	var content = this.template({ quiz: this.model });
    this.$el.html(content);
    

    this.model.questions().each(function(question){
      var questionShow = new Rehearsable.Views.questionShow({
      	model: question
      })
      $('.questions').append(questionShow.render().$el)
    });

    return this
  } 
});