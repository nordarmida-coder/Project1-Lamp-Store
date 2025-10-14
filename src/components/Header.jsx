function Header({
  onNavigate,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => onNavigate("home")}
      >
        Lamp Store
      </h1>

    
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      >
        <option value="All">All</option>
        <option value="Filament">Filament</option>
        <option value="Incandescent">Incandescent</option>
        <option value="Phyto">Phyto</option>
        <option value="LED">LED</option>
      </select>


      <button
        onClick={() => onNavigate("cart")}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        🛒
      </button>
    </header>
  );
}

export default Header;
