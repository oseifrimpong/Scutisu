class CreateBookRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :book_requests do |t|
    		t.string	:studentID
    		t.string	:phone
		    t.references :book, foreign_key: true
		    t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
