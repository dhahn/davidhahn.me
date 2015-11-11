class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :slug
    	t.string :image_url
    	t.string :project_url
    	t.date :end_date
    	t.string :project_type
    	t.string :name
    	t.text :skills, array: true, default: []

      t.timestamps null: false
    end
  end
end
