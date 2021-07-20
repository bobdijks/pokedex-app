class Pokemon < ApplicationRecord
  validates :name, presence: true
  validates :pokemon_type, presence: true
  validates :ability, presence: true
  validates :weight, presence: true
  has_one_attached :photo
end
