class AddImageToBooks < ActiveRecord::Migration[5.0]
def up
    add_attachment :books, :avatar
  end

  def down
    remove_attachment :books, :avatar
  end
end
