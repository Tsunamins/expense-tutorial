class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance #these are here to allow access from front end, what attributes to access from account, if these were not here would see the created and updated at attributes

  #added so that can access data.transactions in front end from fetch:
  has_many :transactions
end
