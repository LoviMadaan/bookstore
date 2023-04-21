import '../style/Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { bookAdd, bookRemove } from '../../redux/books/bookSlice';

const BookTodo = () => {
  const { bookData } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBook = {
      title: formData.get('title'),
      author: formData.get('author'),
    };
    dispatch(bookAdd(newBook));
  };
  return (
    <>
      <div className="container">
        <ul>
          {bookData.map((item) => (

            <li key={item.item_id}>
              {item.title}
              {' '}
              By
              {' '}
              {item.author}
              <button type="button" id="remove" onClick={() => dispatch(bookRemove(item.item_id))}>Remove</button>
            </li>

          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <br />
          <input type="text" name="author" placeholder="Author" />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default BookTodo;
