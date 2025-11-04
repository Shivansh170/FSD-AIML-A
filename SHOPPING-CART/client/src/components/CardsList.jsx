import Cart from "./Cart";
export default function CardList() {
  return (
    <>
      <div className="grid grid-cols-4 py-5 mx-auto w-11/12 gap-y-3">
        {items.map((e) => (
          <Cart key={e.id} imageURL={e.image} title={e.title} price={e.price} />
        ))}
      </div>
    </>
  );
}
