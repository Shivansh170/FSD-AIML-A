export default function Book({ imageURL, title, price }) {
  return (
    <>
      <div className="card">
        <img src={imageURL} alt="book_image" />
        <h3>Title:{title}</h3>
        <h4>Price:₹{price}</h4>
        <button>Add to Cart</button>
      </div>
    </>
  );
}
