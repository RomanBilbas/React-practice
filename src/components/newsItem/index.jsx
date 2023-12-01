function NewsItem(props) {
  const {
    news: { body, title },
  } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export default NewsItem;
