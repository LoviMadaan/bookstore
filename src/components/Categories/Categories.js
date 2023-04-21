import { useSelector } from 'react-redux';

const BookCategories = () => {
  const bookCategorie = useSelector((store) => store.categories.bookName);

  return (
    <>
      <h1>{bookCategorie}</h1>
      <button type="button" className="button-status">Check Status</button>
    </>
  );
};
export default BookCategories;
