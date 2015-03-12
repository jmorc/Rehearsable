class Patient < ActiveRecord::Base
	validates :viewable_time, presence: true
	belongs_to :clinic
	has_many :items

	def viewable?
		Time.now > self.viewable_time.to_time 
	end
end
