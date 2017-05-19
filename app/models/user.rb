class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  	#has_many :book_requests, through: :books


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
