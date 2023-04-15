import '../style/Style.css';

function BookTodo() {
  const data = [
    {
      id: 1,
      title: 'Full stack developer',
      author: 'Lovi',
    },
    {
      id: 2,
      title: 'Future if full stack developer',
      author: 'Jiya',
    },
    {
      id: 3,
      title: 'Deploy the web apps to live server',
      author: 'Aaradhya',
    },
  ];
  return (
    <div className="container1">
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>
            By
            {item.author}
          </p>
          <button type="button" id="remove">Remove</button>
        </div>
      ))}
      <input type="text" id="title" placeholder="Your Title Here..." />
      <br />
      <input type="text" id="name" placeholder="Your Name Here..." />
      <br />
      <button type="submit">Add Book</button>
    </div>
  );
}

export default BookTodo;
