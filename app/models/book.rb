class Book < ApplicationRecord
	belongs_to :author
	has_many :book_requests, through: :users
end
