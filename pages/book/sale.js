/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { booksOnSale } from '../../api/bookData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';

export default function BooksOnSale() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const getAllSaleBooks = () => {
    booksOnSale(user.uid).then(setBooks);
  };

  useEffect(() => {
    getAllSaleBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllSaleBooks} />
      ))}
    </div>
  );
}
