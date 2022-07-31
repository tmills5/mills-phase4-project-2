class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :full_name
      t.string :state
      t.text :description
      t.string :image
      t.string :url

      t.timestamps
    end
  end
end
