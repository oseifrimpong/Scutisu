class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
<<<<<<< HEAD
=======
  before_action :authenticate_user!
>>>>>>> db82be3a35b388dd33cfc3bd5d6c338bb52be5e6
end
