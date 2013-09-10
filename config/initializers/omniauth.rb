Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['FBOOK_APP_ID'], ENV['FBOOK_APP_SECRET'],
           :scope => 'email,read_stream'
end