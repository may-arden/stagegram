class CreateOperaCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :opera_collections do |t|
      t.references :opera, null: false, foreign_key: true
      t.references :collection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
