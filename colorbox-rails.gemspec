# encoding: UTF-8

$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "colorbox-rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "colorbox-rails"
  s.version     = ColorboxRails::VERSION
  s.authors     = ["Błażej Kosmowski", "Bartłomiej Danek", "Alexander Maslov"]
  s.email       = ["b.kosmowski@selleo.com"]
  s.homepage    = "http://www.selleo.com"
  s.summary     = "Simple engine making colorbox use in rails super easy"
  s.description = "Simple engine making colorbox use in rails super easy"

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", ">= 3.1.1"
  s.add_dependency "jquery-rails"
end
