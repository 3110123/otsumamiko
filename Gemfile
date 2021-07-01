source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.3'
gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'mysql2', '>= 0.4.4'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'

gem 'aws-sdk-s3', require: false
gem 'bootsnap', '>= 1.4.2', require: false
gem 'enum_help'
gem 'meta-tags'
gem 'seed-fu'
gem 'sorcery'
gem 'rails-i18n'
gem 'pagy'

gem 'newrelic_rpm'
gem 'redis'
gem 'redis-rails'

gem "sentry-ruby"
gem "sentry-rails"

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'faker'
  gem 'factory_bot_rails'
  gem 'rspec-rails'
  gem 'simplecov', require: false
  gem 'brakeman', require: false
  gem 'rails_best_practices'
  gem 'rubocop'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-byebug'
end

group :test do
  gem 'capybara'
  gem 'webdrivers'
end

group :development do
  gem 'letter_opener_web'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'bullet'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
