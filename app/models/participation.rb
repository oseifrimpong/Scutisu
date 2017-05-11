class Participation < ApplicationRecord
	belongs_to :user
	belongs_to :event

	#accepts_nested_attributes_for :first_name
end
