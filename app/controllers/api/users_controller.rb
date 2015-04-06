class Api::UsersController < ApplicationController
	before_action :authenticate_user!

	def index
      @user = current_user
	  render 'users/index'
	end
end