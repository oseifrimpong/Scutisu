class CreateParticipations < ActiveRecord::Migration[5.0]
  def change
    create_table :participations do |t|
      t.string :first_name
      
      
      t.timestamps
    end
  end
end
