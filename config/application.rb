require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

<<<<<<< HEAD
module Scutisu
=======
module ScutIsu
>>>>>>> db82be3a35b388dd33cfc3bd5d6c338bb52be5e6
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
<<<<<<< HEAD

=======
>>>>>>> db82be3a35b388dd33cfc3bd5d6c338bb52be5e6
    ENV['RAILS_ADMIN_THEME'] = 'rollincode'
  end
end
