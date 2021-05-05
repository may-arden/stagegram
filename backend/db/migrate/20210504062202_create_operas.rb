class CreateOperas < ActiveRecord::Migration[6.1]
  def change
    create_table :operas do |t|
      t.string :title
      t.string :director
      t.string :description
      t.string :img_src

      t.timestamps
    end
  end
end
