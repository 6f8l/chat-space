class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validate :text, presence: true,unless: :image?
end
