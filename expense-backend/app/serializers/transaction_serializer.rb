class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :account_id, :amount, :kind, :date, :description

  #added to format date appearance:
  def date
    self.object.date.strftime("%m/%d/%Y %I:%M%p")
  end
end
