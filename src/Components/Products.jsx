import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // no products
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No products found
      </div>
    );
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Products
        </h2>

        <div
          className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
            >
              <div className="h-48 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>

              <h3 className="font-medium text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>

              <p className="text-indigo-600 font-semibold text-lg">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
