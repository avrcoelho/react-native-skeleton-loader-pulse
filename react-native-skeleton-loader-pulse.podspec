require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-skeleton-loader-pulse"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-skeleton-loader-pulse
                   DESC
  s.homepage     = "https://github.com/avrcoelho/react-native-skeleton-loader-pulse"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "André Coelho" => "andrevrcoelho@hotmail.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/avrcoelho/react-native-skeleton-loader-pulse.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

