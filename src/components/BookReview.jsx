const BookReview = ({ title, author, review, rating }) => {
  return (
    <div className="w-5/6 md:w-1/3 mx-auto p-4 flex flex-col bg-red-100 rounded-xl shadow-2xl">
      <span className="font-bold">Title:</span>
      <p>{title}</p>
      <span className="font-bold">Author:</span>
      <p>{author}</p>
      <span className="font-bold">Review:</span>
      <p>{review}</p>
      <span className="font-bold">Rating:</span>
      <p>{rating}</p>
    </div>
  );
};

export default BookReview;
