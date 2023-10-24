function ReviewContent({ content }) {
  const onShowMore = () => {
    // code here
  };

  return (
    <>
      <p>{content}</p>
      <a onClick={onShowMore} href="#">
        See more
      </a>
    </>
  );
}

export default ReviewContent;
