class Pokemon < ApplicationRecord
  validates :name, presence: true
  validates :type, presence: true
  validates :ability, presence: true
  validates :weight, presence: true
end
