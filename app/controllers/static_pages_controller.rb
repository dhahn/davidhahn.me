class StaticPagesController < ApplicationController
  def home
    @project = Project.last
  end

  def hello_jamison; end

  def letsencrypt
    render text: ENV['LETSENCRYPTKEY']
  end
end
