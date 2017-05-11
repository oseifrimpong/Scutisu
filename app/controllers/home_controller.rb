class HomeController < ApplicationController
<<<<<<< HEAD
	#before_action :authenticate_user!
  def index
  end
end
=======
 skip_before_action :authenticate_user!, :only => [:index]
  def index
  end
end
>>>>>>> db82be3a35b388dd33cfc3bd5d6c338bb52be5e6
