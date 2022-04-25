class ApplicantsController < ApplicationController
    def index
        applicants = Applicant.all 
        render json: applicants
      end

      def create 
        applicant = Applicant.new(applicant_params)
        render json: applicant, status: :created
      end

      private
  
      def applicant_params
        params.permit(:first_name, :last_name, :email, :phone, :adress, :city, :country, :zip)
      end
end
