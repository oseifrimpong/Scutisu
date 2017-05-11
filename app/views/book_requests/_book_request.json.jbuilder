json.extract! book_request, :id, :created_at, :updated_at
json.url book_request_url(book_request, format: :json)
