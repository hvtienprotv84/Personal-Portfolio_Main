// app/page.js

"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  // Fetch data from server on initial render
  useEffect(() => {
    fetch("/api/hello/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="relative mt-3 ml-[45%] text-white text-3xl p-3 font-bold border inline-block">
        Books List
      </h1>
      <br />
      <div className="w-[45%] p-3 bg-white rounded-md shadow-md mx-auto my-5">
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white p-3 rounded-sm shadow-sm inline-block m-2"
            >
              <h1 className="text-blue-700 font-bold">{`Title: ${book.title}`}</h1>
              <p className="text-green-600">{`Author: ${book.author}`}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
