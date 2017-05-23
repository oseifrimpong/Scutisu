class AddImageToEvents < ActiveRecord::Migration[5.0]
  def up
    add_attachment :events, :avatar
  end

  def down
    remove_attachment :events, :avatar
  end
end
