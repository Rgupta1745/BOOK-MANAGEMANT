import React from "react";
import BookCart from "../components/BookCart";
import { useState, useEffect } from "react";
import Addbooks from "./Addbooks";

const Home = () => {
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem("bookData")) || [];
  });

  const [showBooks, setshowBooks] = useState(false);

  function handleBook(newbook) {
    setBooks((prev) => {
      return [...prev, newbook];
    });
    setBooks(false);
  }

  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <div>
        <button
          onClick={() => setshowBooks((s) => !s)}
          style={{margin:"30px" }}
          className="w-32 h-12 bg-blue-950 text-amber-300 rounded  hover:scale-y-110 transition-transform duration-300"
        >
          {showBooks ? "Close the AddBook" : "AddBooks"}
        </button>
      </div>
      {showBooks && <Addbooks onAddBook={handleBook} />}
      <div className="mt-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {books.length === 0 ? (
          <p>No Books Yet </p>
        ) : (
          books.map((ele, index) => { 
            return (
              <BookCart
                key={index}
                category={ele.category}
                img={ele.bookImage}
                bookname={ele.bookname}
                authorName={ele.authorname}
                text={ele.bookDescription}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
