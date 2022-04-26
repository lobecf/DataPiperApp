class ApplicantsController < ApplicationController
    def index
        applicants = Applicant.all 
        render json: applicants
      end

      def create 
        applicant = Applicant.create(applicant_params)
        if applicant.id 
          render json: applicant.job, status: :created
        else
          render json: {errors: "validation errors"}, status: :unprocessable_entity
        end
      end

      private
  
      def applicant_params
        params.permit(:first_name, :last_name, :email, :phone, :adress, :city, :country, :zip, :job_id)
      end
end
