Rehearsable.Views.quizShow = Backbone.View.extend({
  template: function() {
    return this.open ? JST['quiz/edit'] : JST['quiz/show'];
  },

  events: {
    "click #editQuizButton" : "editQuizInfo",
    "submit form#submitQuizEdits" : "submitQuizEdits",
    "click .newQuestion" : "newQuestion",
    "submit form.newQuestionForm" : "submitNewQuestion",
    "click .newQuizResult" : "newQuizResult",
  },

  initialize: function (options) {
  	this.listenTo(this.model, "sync", this.render);
  	this.listenTo(this.model.questions(), "sync add remove", this.render);
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
        $('.questions').append(answerShow.render().$el);
      })
    });

    return this;
  },

  editQuizInfo: function() {
    this.open = true;
    this.render();
  },

  submitQuizEdits: function(event) {
    event.preventDefault();
    this.open = false;
    var params = $(event.currentTarget).serializeJSON();
    
    this.model.set(params['quiz']);
    this.model.save();
    this.model.fetch();
    this.render();
  },

  newQuestion: function() {
    var newQuestionView = new Rehearsable.Views.questionNew();
    $('.newQuestionForm').html(newQuestionView.render().$el);
  },

  submitNewQuestion: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var question = new Rehearsable.Models.Question();
    params.question.quiz_id = this.model.id;
    question.set(params['question']);
    question.save();
    this.model.questions().add(question);
  }
});