class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  	belongs_to :book_request

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


end
