Rehearsable.Views.quizIndex = Backbone.View.extend({
  template: JST['quiz/index'],
  
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
    this.user = new Rehearsable.Models.User();
    this.user.fetch();
    this.listenTo(this.user, "sync", this.render)
  },

  render: function() { 
    var content = this.template({ 
    	quizzes: this.collection,
    	user: this.user 
    });
  	this.$el.html(content);
  	return this;
  }

})