source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.2'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'bootstrap', '~> 4.0.0.alpha3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'remotipart', github: 'mshibuya/remotipart'
gem 'rails_admin', '~> 1.1.1'
gem 'rails_admin_rollincode', '~> 1.0'
gem 'devise'
gem 'cancancan', '~> 1.10'
gem 'pg'
gem 'will_paginate', '~> 3.1.0'

gem "paperclip", "~> 5.0.0"


gem 'toastr_rails'
gem 'autoprefixer-rails'

group :development, :test do
  gem 'rspec-rails', '~> 3.5'
  gem 'byebug', platform: :mri
  gem 'factory_girl_rails'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'web-console', '>= 3.3.0'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.3'
end


gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
