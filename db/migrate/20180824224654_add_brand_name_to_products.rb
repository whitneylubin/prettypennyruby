class AddBrandNameToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :brandname, :string
  end
end
