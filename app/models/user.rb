class User < ActiveRecord::Base
  attr_accessible :about_me, :email, :password, :username, :zip_code
  attr_reader :password
  
  validates :email,
            :password_digest,
            :username,
            :zip_code,
            :session_token,
            :presence => true
            
  validates :email, :username, :uniqueness => true
            
  validates :password, :length => { :minimum => 6, :allow_nil => true }
  
  after_initialize :ensure_session_token
  
  has_one :shop,
          :foreign_key => :owner_id

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
