import BookReview from "./components/BookReview";
const App = () => {
  return (
    <div className="w-full">
      <header className="w-full text-lg bg-red-400 p-4 text-center">
        The Book Review Task
      </header>
      <BookReview></BookReview>
    </div>
  );
};

export default App;
