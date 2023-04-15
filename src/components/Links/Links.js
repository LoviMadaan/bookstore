import { Link } from 'react-router-dom';

function BookLinks() {
  return (
    <ul className="links-holder">
      <li className="link"><Link to="/">Bookstore CMS</Link></li>
      <li className="link"><Link to="/">Books</Link></li>
      <li className="link"><Link to="/category">Categories</Link></li>
    </ul>
  );
}

export default BookLinks;
