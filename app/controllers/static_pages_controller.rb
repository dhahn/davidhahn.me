class StaticPagesController < ApplicationController
  def home
    @project = Project.last
  end

  def hello_jamison; end
end
