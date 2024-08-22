import BookReview from "./components/BookReview";
const App = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <header className="w-full text-lg bg-red-400 p-4 text-center">
        The Book Review Task
      </header>
      <BookReview
        title="How to win friends?"
        author="Dale Carnegie"
        review="Really good!"
        rating="4 stars"
      ></BookReview>
      <BookReview
        title="Atomic Habits"
        author="James Clear"
        review="Fantastic!"
        rating="4 stars"
      ></BookReview>
    </div>
  );
};

export default App;
