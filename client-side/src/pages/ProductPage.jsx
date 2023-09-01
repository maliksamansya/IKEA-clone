import ProductCard from "../components/ProductCard";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions";
import PulseLoader from "react-spinners/PulseLoader";

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(""); // State untuk menyimpan kategori yang dipilih
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => {
    return state.product.products;
  });

  useEffect(() => {
    dispatch(fetchProducts());
    setLoading(true);
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      setLoading(false);
    }
  }, [products]);

  const uniqueCategories = [
    ...new Set(products.map((product) => product.Category?.name)),
  ]; // Mengambil kategori yang unik dari data card
  // Mengambil kategori yang unik dari data card
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "" || product.Category?.name === selectedCategory
  ); // Menggunakan metode filter untuk menghasilkan array card yang telah difilter berdasarkan kategori yang dipilih
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Mengubah kategori yang dipilih saat pilihan berubah
  };
  return (
    <React.Fragment>
      {loading ? (
        <div className="sweet-loading flex items-center h-screen">
          <PulseLoader
            loading={loading}
            size={20}
            color={"#002672"}
            className="mx-auto"
          />
        </div>
      ) : (
        <>
          <div className="bg-white p-6">
            <div
              className="bg-cover bg-center mt-10"
              style={{
                backgroundImage:
                  'url("https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1683220272542__1.jpeg")',
                height: "250px",
              }}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-black mb-4"></h2>
                  <p className="text-lg text-black mb-8"></p>
                </div>
              </div>
            </div>
            <div className="px-30 mt-10">
              <h1 className="text-3xl mb-8 font-semibold text-darkSmalt">
                All Products
              </h1>
              <div className="mb-4">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 gap-12">
                {filteredProducts.map((product) => {
                  return <ProductCard product={product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default ProductPage;

// <div>
//   <div className="mb-4">
//     <select
//       value={selectedCategory}
//       onChange={handleCategoryChange}
//       className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       <option value="">All Categories</option>
//       {uniqueCategories.map((category) => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   </div>
//   <div className="grid grid-cols-3 gap-4">
//     {filteredCards.map((card) => (
//       <Card key={card.id} title={card.title} category={card.category} />
//     ))}
//   </div>
// </div>;
