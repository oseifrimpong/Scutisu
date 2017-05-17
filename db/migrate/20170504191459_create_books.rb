class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.belongs_to :author, index: true
    	t.string :title
    	t.string :description
      t.string :author
    	t.string :language
    	t.string :year
    	t.string :course
    	t.string :subject
      t.timestamps
    end

   # add_index :books, :author_id
  # add_foreign_key :books, :authors
  end
end
