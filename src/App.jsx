import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <CartProvider>
      <Header
        onNavigate={setPage}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {page === "home" ? (
        <Home searchTerm={searchTerm} selectedCategory={selectedCategory} />
      ) : (
        <Cart />
      )}
    </CartProvider>
  );
}

export default App;
