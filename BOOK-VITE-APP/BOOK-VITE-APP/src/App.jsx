import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
const books = [
  {
    imageURL: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "The Art of Programming",
    price: 499,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "JavaScript: The Complete Guide",
    price: 599,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1528209392021-3a30466df16f",
    title: "Learn React in 30 Days",
    price: 699,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    title: "Python for Beginners",
    price: 399,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1544936207-6f8fdd2bd7c1",
    title: "Mastering Data Structures",
    price: 549,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1522204507505-7b07aa0d63d3",
    title: "Flask Web Development",
    price: 459,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    title: "Clean Code",
    price: 749,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    title: "Deep Learning with Python",
    price: 999,
  },
  {
    imageURL: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    title: "Introduction to Algorithms",
    price: 899,
  },
];

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <div className="flex-1 align-center justify-center grid grid-cols-3 gap-4 w-11/12 mx-auto">
          {books.map((e, index) => (
            <Book
              key={index}
              imageURL={e.imageURL}
              title={e.title}
              price={e.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
