class StaticPagesController < ApplicationController
  def home
  	 @projects = [
      {
        id: 1,
        slug: "potato-ship",
        image_url: "/images/potato-ship.jpg",
        project_url: "https://github.com/collettiquette/potato_ship",
        end_date: "October 2014",
        project_type: "Personal",
        name: "Potato Ship",
        skills: "Ruby on Rails, Javascript, Websockets",
      },
      {
        id: 2,
        slug: "how-epic",
        image_url: "/images/how-epic.jpg",
        project_url: "http://www.howepic.net",
        end_date: "August 2014",
        project_type: "Personal",
        name: "How Epic",
        skills: "Ruby on Rails, Javascript, API",
      },
      {
        id: 3,
        slug: "jurnl",
        image_url: "/images/jurnl-cover.jpg",
        project_url: "https://github.com/dhahn/Jurnl",
        end_date: "December 2013",
        project_type: "Personal",
        name: "Jurnl",
        skills: "Ruby on Rails, Javascript, Postgres",
      },
      {
        id: 4,
        slug: "fridge",
        image_url: "/images/fridge-cover.jpg",
        project_url: "https://github.com/dhahn/r13-team-45",
        end_date: "October 2013",
        project_type: "Personal",
        name: "Fridge",
        skills: "Ruby on Rails, Javascript, Postgres",
      },
    ]
  end
end
