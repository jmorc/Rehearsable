Rehearsable.Views.quizShow = Backbone.View.extend({
  template: function() {
    return this.open ? JST['quiz/edit'] : JST['quiz/show'];
  },

  events: {
    "click #editQuizButton" : "editQuizInfo"
  },

  initialize: function (options) {
  	this.listenTo(this.model, "sync add", this.render);
  	this.listenTo(this.model.questions(), "sync", this.render);
    this.open = options.open || false;
  },

  render: function() {
  	var content = this.template()({ quiz: this.model });
    this.$el.html(content);
    

    this.model.questions().each(function(question){
      var questionShow = new Rehearsable.Views.questionShow({
      	model: question
      })
      $('.questions').append(questionShow.render().$el)

      question.answers().each(function(answer){
        answer.question = question;
        var answerShow = new Rehearsable.Views.answerShow({
          model: answer
        })
        $('.questions').append(answerShow.render().$el)
      })
    });

    return this
  },

  editQuizInfo: function(event) {
    this.open = true;
    this.render();
  } 
});