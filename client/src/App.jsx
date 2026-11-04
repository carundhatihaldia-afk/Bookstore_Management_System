
import { useState } from "react";
import {
  Search, ShoppingCart, BookOpen, User, Menu,
  Heart, Star, ArrowRight
} from "lucide-react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 399,
    category: "Self Help",
    rating: 4.8,
    color: "#e8d5bd",
    emoji: "📘"
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 299,
    category: "Finance",
    rating: 4.7,
    color: "#d9e6d5",
    emoji: "📗"
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Hector Garcia",
    price: 249,
    category: "Self Help",
    rating: 4.6,
    color: "#f3d9d8",
    emoji: "📕"
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 199,
    category: "Fiction",
    rating: 4.9,
    color: "#e4d9f2",
    emoji: "📙"
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    price: 349,
    category: "Productivity",
    rating: 4.7,
    color: "#d6e5ee",
    emoji: "📘"
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 279,
    category: "Finance",
    rating: 4.5,
    color: "#f1e4c9",
    emoji: "📗"
  }
];

const categories = [
  "All Books",
  "Fiction",
  "Self Help",
  "Finance",
  "Productivity"
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Books");
  const [cart, setCart] = useState([]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Books" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  function addToCart(book) {
    setCart((previous) => [...previous, book]);
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="#" className="logo">
          <BookOpen size={27} />
          <span>BookNest</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#books">Explore Books</a>
          <a href="#categories">Categories</a>
        </nav>

        <div className="nav-actions">
          <button className="cart-button">
            <ShoppingCart size={20} />
            Cart
            <span className="cart-count">{cart.length}</span>
          </button>
          <button className="login-button">
            <User size={18} />
            Login
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>
              Discover Stories.
              <br />
              <span>Explore Knowledge.</span>
            </h1>
            <p>
              Find your next favourite book from our carefully
              selected collection. Read more, learn more, grow more.
            </p>
            <a href="#books" className="explore-button">
              Explore Collection <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-art">
            <div className="book-stack">📚</div>
            <div className="floating-note">A world of stories awaits!</div>
          </div>
        </section>

        <section className="features">
          <div>📦 <span>Easy Ordering</span></div>
          <div>📚 <span>Wide Book Collection</span></div>
          <div>💳 <span>Simple Checkout</span></div>
          <div>🚚 <span>Order Tracking</span></div>
        </section>

        <section className="books-section" id="books">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOU</span>
              <h2>Explore Our Books</h2>
            </div>
            <span className="book-total">
              {filteredBooks.length} books available
            </span>
          </div>

          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by book title or author..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="categories" id="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="book-grid">
            {filteredBooks.map((book) => (
              <article className="book-card" key={book.id}>
                <div
                  className="book-cover"
                  style={{ backgroundColor: book.color }}
                >
                  <span className="book-emoji">{book.emoji}</span>
                  <button className="wishlist" aria-label="Add to wishlist">
                    <Heart size={19} />
                  </button>
                </div>

                <div className="book-info">
                  <span className="book-category">{book.category}</span>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>

                  <div className="rating">
                    <Star size={15} fill="#f5ad35" color="#f5ad35" />
                    {book.rating}
                  </div>

                  <div className="book-bottom">
                    <strong>₹{book.price}</strong>
                    <button onClick={() => addToCart(book)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <p className="no-books">No books found. Try another search.</p>
          )}
        </section>
      </main>

      <footer>
        <div className="logo">
          <BookOpen size={23} />
          <span>BookNest</span>
        </div>
        <p>Read. Discover. Grow.</p>
        <p>© 2026 BookNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
