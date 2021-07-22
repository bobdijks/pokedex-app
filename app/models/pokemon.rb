class Pokemon < ApplicationRecord
  validates :name, presence: true
  validates :pokemon_type, presence: true
  validates :ability, presence: true
  validates :weight, presence: true
  validates :photo_url, presence: true
  validates :height, presence: true
end
