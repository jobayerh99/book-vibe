import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 mb-5 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col sm:flex-row gap-6">

                {/* Book Image */}
                <div className="w-full sm:w-44 h-60 shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={350}
                        height={350}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Book Information */}
                <div className="flex-1 flex flex-col justify-between">

                    {/* Top Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {book.bookName}
                        </h2>

                        <p className="text-gray-500 mb-5">
                            By{" "}
                            <span className="font-semibold text-gray-700">
                                {book.author}
                            </span>
                        </p>

                        {/* Category */}
                        <div className="mb-5">
                            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                                {book.category}
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Book Stats */}
                        <div className="flex flex-wrap gap-5 text-sm">

                            <div className="flex items-center gap-2">

                                <span className="font-semibold">
                                    {book.rating}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">

                                <span>{book.totalPages} Pages</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">

                                <span>{book.yearOfPublishing}</span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Information */}
                    <div className="border-t mt-6 pt-4 flex flex-wrap justify-between gap-3 text-sm">

                        <p className="text-gray-500">
                            Publisher:{" "}
                            <span className="font-semibold text-gray-700">
                                {book.publisher}
                            </span>
                        </p>

                        <Link href={`/books/${book.bookId}`}>
                            <button className="btn btn-primary px-6">
                                View Details
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;