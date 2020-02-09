class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :account_id, :amount, :kind, :date, :description
end
