class StaticPagesController < ApplicationController
  def home
    @project = Project.last
  end

  def hello_jamison; end

  def letsencrypt1
    render text: ENV['LETSENCRYPTKEY1']
  end

  def letsencrypt2
    render text: ENV['LETSENCRYPTKEY2']
  end
end
