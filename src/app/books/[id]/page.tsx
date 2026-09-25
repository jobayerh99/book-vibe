import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching Book Data", error)
    return [];
  }
};

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  return (
    <div className="container mx-auto">
      <div className="card lg:card-side overflow-hidden border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mt-8">
        {/* Image */}
        <figure className="shrink-0 bg-base-200 lg:w-80 lg:min-w-80">
          <Image
            src={book.image}
            alt={book.bookName}
            width={320}
            height={450}
            className="h-full w-full object-cover"
          />
        </figure>

        {/* Details */}
        <div className="card-body min-w-0">
          {/* Category */}
          <div>
            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 className="card-title text-2xl font-bold lg:text-3xl">
              {book.bookName}
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              by{" "}
              <span className="font-semibold text-base-content/80">
                {book.author}
              </span>
            </p>
          </div>

          {/* Rating / Pages / Year */}
          <div className="flex flex-wrap items-center gap-3 py-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-semibold">{book.rating}</span>
            </div>

            <span className="text-base-content/30">•</span>

            <span className="text-sm text-base-content/70">
              {book.totalPages} pages
            </span>

            <span className="text-base-content/30">•</span>

            <span className="text-sm text-base-content/70">
              {book.yearOfPublishing}
            </span>
          </div>

          {/* Review */}
          <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Publisher Info */}
          <div className="mt-2 grid grid-cols-2 gap-3 rounded-xl bg-base-200/60 p-3 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="font-medium">{book.publisher}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Pages</p>
              <p className="font-medium">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>
              <p className="font-medium">{book.yearOfPublishing}</p>
            </div>
          </div>

          {/* Button */}
          <div className="card-actions mt-3 justify-end">
            <ReadButton book={book}></ReadButton>

            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
