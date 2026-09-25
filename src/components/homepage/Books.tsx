
import React from "react";
import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

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

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-17 px-4">
            {/* Section Header */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
                    Our Collection
                </p>

                <h1 className="text-4xl font-bold text-gray-900">
                    Explore All Books
                    <span className="text-pink-600"> Favorite Book</span>
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Explore our carefully selected collection of timeless classics,
                    inspiring stories, and unforgettable adventures.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book: IBook, ind: number) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;
