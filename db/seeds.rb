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

wild_med = instructor1.quizzes.create(title: "Poionous plants",
	      description: "Test your knowledge on first aid for poison ivy/oak")

poison1 = wild_med.questions.create(body: "What is first step in treating poison ivy / oak?",
	                              question_type: "radio", ord: 1)
poison2 = wild_med.questions.create(body: "What portion of the population is susceptible to poison ivy / oak?",
	                              question_type: "radio", ord: 2)
poison3 = wild_med.questions.create(body: "How can you treat poison ivy / oak? (Check all that apply)",
	                              question_type: "checkbox", ord: 3)

poison1.answers.create(body: "Apply hydrocortisone cream", 
					   correct: false,
					   note: "This is a treatment, but not the first treatment.")
poison1.answers.create(body: "Wash with soapy, lukewarm water", 
					   correct: true,
					   note: "This will help stop toxic oil from spreading.")

poison1.answers.create(body: "Apply a cool compress", 
					   correct: false,
					   note: "Ok, but don't do this first!")

poison2.answers.create(body: "99 %", 
					   correct: false,
					   note: "That's too high!!")
poison2.answers.create(body: "85 %", 
					   correct: true,
					   note: "True but an individual's sensitivity can change with time.")
poison2.answers.create(body: "60 %", 
					   correct: false,
					   note: "That's too low!!")

poison3.answers.create(body: "Apply hydrocortisone cream", 
					   correct: true,
					   note: "This can help.")
poison3.answers.create(body: "Wash with soapy, lukewarm water", 
					   correct: true,
					   note: "This is the most important thing to do first!")
poison3.answers.create(body: "Scratch or rub the itchy skin", 
					   correct: false,
					   note: "Not a good idea! It can spread the toxic oils.")
poison3.answers.create(body: "Puncture blisters to relieve pressure", 
					   correct: false,
					   note: "This can delay healing.")
poison3.answers.create(body: "Apply diluted bleach to the rash", 
					   correct: false,
					   note: "This home remedy is not shown to be effective.")

jackson = instructor1.quizzes.create(title: "MJ: King of Pop",
	      description: "You wanna be startin' somethin', You got to be startin' somethin'")

jackson_q1 = jackson.questions.create(body: "Thriller is ... (select all that apply)",
									question_type: "checkbox", ord: 1)

jackson_q2 = jackson.questions.create(body: "Michael Jackson is ... (select all that apply)",
									question_type: "checkbox", ord: 1)

jackson_q3 = jackson.questions.create(body: "Billie Jean is ... (select all that apply)",
									question_type: "checkbox", ord: 1)

jackson_q1.answers.create(body: "the third music video inducted into the US National Film Registry (NFR)", 
						  correct: false,
						  note: "Thriller is the only music video in the NFR!")

jackson_q1.answers.create(body: "the best-selling album of all time", 
						  correct: true,
						  note: "Thriller is, globally, the best selling album ever.")

jackson_q1.answers.create(body: "technically a disco album", 
						  correct: false,
						  note: "Thriller is considered post-disco.")

jackson_q2.answers.create(body: "from Chicago", 
						  correct: false,
						  note: "MJ is from Gary, IN (but that is close to Chicago).")

jackson_q2.answers.create(body: "a generous person", 
						  correct: true,
						  note: "MJ set a Guinness World Record for supporting charities.")

jackson_q2.answers.create(body: "master of the the moonstalk dance technique", 
						  correct: false,
						  note: "The correct term is moonwalk.")

jackson_q3.answers.create(body: "not my lover", 
						  correct: true,
						  note: "This is emphasized in the chorous of the song.")

jackson_q3.answers.create(body: "like a beauty queen from a movie scene.", 
						  correct: true,
						  note: "This is part of the opening lyric.")

jackson_q3.answers.create(body: "the worldwide number one disco hit", 
						  correct: false,
						  note: "Billie Jean is considered post-disco.")

bbq = instructor1.quizzes.create(title: "Barbecue", 
						  description: "Test your knowledge of this fine treat.")

bbq_q1 = bbq.questions.create(body: "Carolina BBQ...(select all that apply)",
				     		  question_type: "checkbox",
				     		  ord: 2)

bbq_q1.answers.create(body: "is probably the oldest from of American BBQ" ,
					  correct: true, 
					  note: "NC BBQ was influenced by the original settlers in the region." )

bbq_q1.answers.create(body: "usually consists of chopped beef" ,
					  correct: false, 
					  note: "It is usually pork, served pulled, shredded, or chopped, but sometimes sliced")

bbq_q1.answers.create(body: "uses a thin sauce made of vinegar and spices." ,
					  correct: true, 
					  note: "In Western North Carolina, tomato may be added too.")

bbq_q2 = bbq.questions.create(body: "Which regions tend to use more beef as well as pork?",
				     		  question_type: "radio",
				     		  ord: 1)

bbq_q2.answers.create(body: "Carolina and Memphis" ,
					  correct: true, 
					  note: "These areas represent older BBQ culture and focus on pork." )

bbq_q2.answers.create(body: "Texas and Kansas City",
					  correct: false, 
					  note: "These regions represent a later evolution of style and use more beef.")

bbq_q3 = bbq.questions.create(body: "California doesn't have much of a BBQ tradition.",
				     		  question_type: "radio",
				     		  ord: 1)

bbq_q3.answers.create(body: "True" ,
					  correct: false, 
					  note: "Pit BBQ was performed by Native Americans, including California tribes." )

bbq_q3.answers.create(body: "False",
					  correct: true, 
					  note: "Spanish and Mexican settlers also had outdoor cooking traditions for BBQ beef.")



