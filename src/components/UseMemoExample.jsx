import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Headphones", price: 100 },
  { id: 3, name: "Keyboard", price: 60 },
  { id: 4, name: "Mouse", price: 25 },
];

const UseMemoExample = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <section>
      <h2>useMemo Example: Search Products</h2>
      <label>
        Search products:{" "}
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Try laptop"
        />
      </label>

      <p>Unrelated counter: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increase counter
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UseMemoExample;
