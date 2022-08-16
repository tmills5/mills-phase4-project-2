class CreatePasses < ActiveRecord::Migration[6.1]
  def change
    create_table :passes do |t|
      t.float :price
      t.integer :user_id
      t.integer :park_id

      t.timestamps
    end
  end
end
