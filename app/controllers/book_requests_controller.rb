class BookRequestsController < ApplicationController
  before_action :set_book_request, only: [:show, :edit, :update, :destroy]

  # GET /book_requests
  # GET /book_requests.json
  def index
    @book_requests = BookRequest.all
  end

  # GET /book_requests/1
  # GET /book_requests/1.json
  def show
  end

  # GET /book_requests/new
  def new
    @book_request = BookRequest.new
  end

  # GET /book_requests/1/edit
  def edit
  end

  # POST /book_requests
  # POST /book_requests.json
  def create
    @book_request = BookRequest.new(book_request_params)

    respond_to do |format|
      if @book_request.save
        format.html { redirect_to @book_request, notice: 'Book request was successfully created.' }
        format.json { render :show, status: :created, location: @book_request }
      else
        format.html { render :new }
        format.json { render json: @book_request.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /book_requests/1
  # PATCH/PUT /book_requests/1.json
  def update
    respond_to do |format|
      if @book_request.update(book_request_params)
        format.html { redirect_to @book_request, notice: 'Book request was successfully updated.' }
        format.json { render :show, status: :ok, location: @book_request }
      else
        format.html { render :edit }
        format.json { render json: @book_request.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /book_requests/1
  # DELETE /book_requests/1.json
  def destroy
    @book_request.destroy
    respond_to do |format|
      format.html { redirect_to book_requests_url, notice: 'Book request was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_request
      @book_request = BookRequest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_request_params
      params.fetch(:book_request, {})
    end
end
