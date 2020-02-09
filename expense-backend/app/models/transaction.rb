class Transaction < ApplicationRecord
    belongs_to :account

    validates :amount, presence: true

    validates_inclusion_of :kind, :in => ['deposit', 'withdraw'] #what is referenced in kind must be deposit or withdraw
end
