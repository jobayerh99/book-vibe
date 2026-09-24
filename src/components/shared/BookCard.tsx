import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={800}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pink-600 shadow backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-pink-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-pink-50 px-2.5 py-1 text-xs font-medium text-pink-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="my-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 truncate font-semibold text-gray-800">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Rating</p>
            <p className="mt-1 font-semibold text-gray-800">
              ⭐ {book.rating}/5
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-pink-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
