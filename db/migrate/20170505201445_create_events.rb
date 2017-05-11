class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
    		t.string :name
    		t.string :description
    		#t.image :picture
    		t.datetime :event_date
    		t.datetime :regis_deadline
      t.timestamps
    end
  end
end
