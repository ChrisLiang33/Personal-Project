const Book = (props) => {
  const { author, title, img, number } = props;
  console.log(number);
  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4> {author}</h4>
        <span className="number1">{number + 1}</span>
      </article>
    </>
  );
};

export default Book;
