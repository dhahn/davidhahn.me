class StaticPagesController < ApplicationController
  def home
    @projects = Project.all
  end

  def hello_jamison; end
end
