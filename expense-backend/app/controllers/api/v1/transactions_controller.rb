class Api::V1::TransactionsController < ApplicationController
    #this method setup below to allow use of @account and its model methods to be accessesed in
    #conjunction with transaction, esp helpful within create method below
    before_action :set_account

    def index
    #previous was:
    #@transactions = @account.transactions
      @transactions = Transaction.all
      render json: @transactions
    end
  
    def show
       
      @transaction = Transaction.find(params[:id])
      render json: @transaction
    end
  
    def create
      @transaction = @account.transactions.new(transaction_params)
  
      @transaction.date = DateTime.now
      #@account is an account instance so its method written in Account model can be called upon it here, passing the transaction instance into it
      if @account.update_balance(@transaction) != 'Balance too low.'
        @transaction.save
        render json: @account
      else
        render json: {error: 'Balance too low'}
      end
    end
  
    def destroy
      @transaction = Transaction.find(params["id"])
      @account = Account.find(@transaction.account_id)
      if @account.update_balance_on_delete(@transaction)
        @transaction.destroy
        render json: @account
      else
        render json: {error: 'Balance too low'}
      end
    end
  
    private
  
    def set_account
      @account = Account.find(params[:account_id])
    end
  
  
    def transaction_params
      params.require(:transaction).permit(:amount, :account_id, :kind, :date, :description)
    end
end
