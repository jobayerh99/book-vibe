"use client";

import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log(readBooks, wishlist, "Read Books");
  return (
    <div className="container mx-auto py-5">
      <h2 className="my-7 bg-amber-100 rounded-2xl py-16 font-bold text-4xl text-center">Listed Books</h2>

      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
        <div className="tab-content bg-base-100 border-base-300 p-6">

          {readBooks.length > 0 ?
            readBooks.map((book: IBook) => {
              return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
            }) : (
              <p className="text-center text-lg font-semibold">No Read Books Added</p>
            )
          }

        </div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wish List (${wishlist.length})`} defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">

          {wishlist.length > 0 ?
            wishlist.map((book: IBook) => {
              return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
            }) : (
              <p className="text-center text-lg font-semibold">No Wish List Added</p>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
