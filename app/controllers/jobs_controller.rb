class JobsController < ApplicationController

    def index
        jobs = Job.all 
        render json: jobs
      end

    def show 
      job = Job.find(params[:id])
      render json: job
    end

    def create 
      job = Job.create(job_params)
      if job 
        render json: job, status: :created
      else
        render json: {errors: "validation errors"}, status: :unprocessable_entity
      end
    end

    def job_params
      params.permit(:client, :poc, :email, :role, :urgancy, :quantity, :skills_needed)
    end

end
