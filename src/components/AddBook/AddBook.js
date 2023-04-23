import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../../redux/books/booksSlice';
import ProgressB from '../Books/ProgressB';

const BookAdd = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>please wait it is loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching books</p>;
  }
  return (
    <div className="book-container">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <div className="book-add">
            <p className="category">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.author}</p>
            <div className="bttns">
              <div className="bttn">Comments</div>
              <div
                className="bttn"
                role="button"
                tabIndex="0"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                }}
              >
                Remove
              </div>
              <div className="bttn">Edit</div>
            </div>
          </div>
          <div className="progress-bar">
            <ProgressB />
            <ul className="pro-text">
              <li><h2>50%</h2></li>
              <li><p>Completed</p></li>
            </ul>
          </div>
          <div className="chapter-container">
            <ul>

              <li><h2 className="current-h2">Current Chapter</h2></li>
              <li><h3 className="chapter-h3">Chapter 17</h3></li>
              <li><h4 className="update-h4">Update Progress</h4></li>
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BookAdd;
