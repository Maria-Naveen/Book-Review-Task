import { useState } from "react";

const BookReview = ({ title, author, reviewText, rating }) => {
  const [review, setReview] = useState(reviewText);
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="w-5/6 md:w-1/3 mx-auto p-4 flex flex-col bg-red-100 rounded-xl shadow-2xl">
      <span className="font-bold">Title:</span>
      <p>{title}</p>
      <span className="font-bold">Author:</span>
      <p>{author}</p>
      <div>
        <span className="font-bold">Review text:</span>
        {isEditing ? (
          <input
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></input>
        ) : (
          <p>{review}</p>
        )}
      </div>
      <span className="font-bold">Rating:</span>
      <p>{rating}</p>
      <button className="w-3/4 mx-auto p-2 bg-red-400" onClick={handleClick}>
        {isEditing ? "Save" : "Edit review text"}
      </button>
    </div>
  );
};

export default BookReview;
