class AddRolesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :admin_role, :boolean, default: false
    add_column :users, :executive_role, :boolean, default: false
    add_column :users, :student_role, :boolean
  end
end
