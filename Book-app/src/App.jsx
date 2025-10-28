import Book from "./components/Book";
export default function App() {
  const books = [
    {
      title: "Atomic Habits",
      imageURL: "https://picsum.photos/400/600?random=1",
      price: 499,
    },
    {
      title: "Clean Code",
      imageURL: "https://picsum.photos/400/600?random=2",
      price: 799,
    },
    {
      title: "Eloquent JavaScript",
      imageURL: "https://picsum.photos/400/600?random=3",
      price: 599,
    },
    {
      title: "You Don't Know JS",
      imageURL: "https://picsum.photos/400/600?random=4",
      price: 699,
    },
    {
      title: "Deep Work",
      imageURL: "https://picsum.photos/400/600?random=5",
      price: 449,
    },
    {
      title: "The Pragmatic Programmer",
      imageURL: "https://picsum.photos/400/600?random=6",
      price: 899,
    },
    {
      title: "Design Patterns",
      imageURL: "https://picsum.photos/400/600?random=7",
      price: 749,
    },
    {
      title: "Refactoring",
      imageURL: "https://picsum.photos/400/600?random=8",
      price: 849,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Bookstore</h1>
          <p className="text-sm text-gray-600">Browse our picks</p>
        </header>

        <section aria-label="Books grid">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((b, i) => (
              <Book key={`${b.title}-${i}`} {...b} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
