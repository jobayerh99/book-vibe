"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleaddToWishlist = () => {
    setWishlist([...wishlist, book]);
    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-primary px-6"
      onClick={() => handleaddToWishlist()}
    >
      Add To WishList
    </button>
  );
};

export default WishListButton;
