# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Compass
guard :compass

# Coffeescript
guard 'coffeescript', :input => 'src/coffee', :output => 'public/assets/js'

# Concat
guard :concat, type: "js", files: %w(), input_dir: "public/js", output: "public/js/all"

guard :concat, type: "css", files: %w(), input_dir: "public/css", output: "public/css/all"

# Uglify
guard 'uglify', :destination_file => "public/javascripts/application.js" do
  watch (%r{app/assets/javascripts/application.js})
end

# Livereload
guard 'livereload' do
  watch(%r{public/.+\.(css|js|html)})
end

