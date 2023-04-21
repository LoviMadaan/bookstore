import { Routes, Route } from 'react-router-dom';
import './components/style/Style.css';
import BookCategories from './components/Categories/Categories';
import BookTodo from './components/Todo/Todo';
import BookLinks from './components/Links/Links';

const TodoApp = () => (
  <>
    <BookLinks />
    <Routes>
      <Route path="/" element={<BookTodo />} />
      <Route path="/category" element={<BookCategories />} />
    </Routes>
  </>
);
export default TodoApp;
