# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

instructor1 = User.new(email: "instructor1@gmail.com", 
	                      instructor: true, password: "instructor1")

instructor1.save!

student1 = User.create(email: "student1@gmail.com", 
	                      instructor: false, password: "student1")

wildMed = instructor1.quizzes.create(title: "Wilderness Med: Poionous plants",
	      description: "Test your knowledge on first aid for poison ivy")

poison1 = wildMed.questions.create(body: "What is first step in treating poison ivy / oak?",
	                              question_type: "radio", ord: 1)
poison2 = wildMed.questions.create(body: "What portion of the population is susceptible to poison ivy / oak?",
	                              question_type: "radio", ord: 2)
poison3 = wildMed.questions.create(body: "How can you treat poison ivy / oak? (Check all that apply)",
	                              question_type: "checkbox", ord: 2)

poison1.answers.create(body: "Apply hydrocortisone cream", correct: false)
poison1.answers.create(body: "Wash with soapy, lukewarm water", correct: true)
poison1.answers.create(body: "Apply a cool compress", correct: false)

poison2.answers.create(body: "99 %", correct: false)
poison2.answers.create(body: "85 %", correct: true)
poison2.answers.create(body: "60 %", correct: false)

poison3.answers.create(body: "Apply hydrocortisone cream", correct: true)
poison3.answers.create(body: "Wash with soapy, lukewarm water", correct: true)
poison3.answers.create(body: "Apply a cool compress", correct: true)
poison3.answers.create(body: "Scratch or rub the itchy skin", correct: false)
poison3.answers.create(body: "Puncture blisters to relieve pressure", correct: false)
poison3.answers.create(body: "Consider bathing the dog", correct: true)
poison3.answers.create(body: "Apply an antihistamine to the skin", correct: false)
poison3.answers.create(body: "Consider an antihistamine pill", correct: true)
poison3.answers.create(body: "Wash the clothing you were wearing", correct: true)
poison3.answers.create(body: "Apply diluted bleach to the rash", correct: false)




