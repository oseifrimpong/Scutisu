require 'test_helper'

class BookRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book_request = book_requests(:one)
  end

  test "should get index" do
    get book_requests_url
    assert_response :success
  end

  test "should get new" do
    get new_book_request_url
    assert_response :success
  end

  test "should create book_request" do
    assert_difference('BookRequest.count') do
      post book_requests_url, params: { book_request: {  } }
    end

    assert_redirected_to book_request_url(BookRequest.last)
  end

  test "should show book_request" do
    get book_request_url(@book_request)
    assert_response :success
  end

  test "should get edit" do
    get edit_book_request_url(@book_request)
    assert_response :success
  end

  test "should update book_request" do
    patch book_request_url(@book_request), params: { book_request: {  } }
    assert_redirected_to book_request_url(@book_request)
  end

  test "should destroy book_request" do
    assert_difference('BookRequest.count', -1) do
      delete book_request_url(@book_request)
    end

    assert_redirected_to book_requests_url
  end
end
