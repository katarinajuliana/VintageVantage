class User < ActiveRecord::Base
  extend FriendlyId
  
  attr_accessible :about, :email, :password, :username, :location, :fbook_token
  attr_reader :password
  
  validates :email,
            :password_digest,
            :username,
            :session_token,
            :presence => true
          
  validates :email, :username, :uniqueness => true
  
  validates :password, :length => { :minimum => 6, :allow_nil => true }
  
  after_create :downcase_email
  
  friendly_id :username, :use => :slugged
  
  has_many :favorite_items,
           :through => :item_favorites,
           :source  => :item
           
  has_many :favorite_shops,
           :through => :shop_favorites,
           :source  => :shop
           
  has_many :item_favorites
  
  has_many :purchases
           
  has_many :shop_favorites
  
  has_one :shop,
          :foreign_key => :owner_id,
          :dependent   => :destroy

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
  def downcase_email
    self.email = self.email.downcase
    self.save
  end
  
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
