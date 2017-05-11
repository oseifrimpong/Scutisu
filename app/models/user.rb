class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :book_request
  has_many :participations
  has_many :events, through: :participations
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
