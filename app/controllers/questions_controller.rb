class QuestionsController < ApplicationController
  respond_to :json
  
  def create
    @question = Question.new(:body => params[:body])
    @question.item_id = params[:item_id]
    @question.user_id = current_user.id
    
    if @question.save
      render :json => @question
    else
      render :json => @question.errors.full_messages, :status => 422
    end
  end
end
