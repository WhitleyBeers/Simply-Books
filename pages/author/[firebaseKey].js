/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import { getAuthorBooks } from '../../api/authorData';
import BookCard from '../../components/BookCard';
// import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [authorDetails, setAuthorDetails] = useState({});
  const [books, setBooks] = useState([]);

  const getBookCards = () => {
    getAuthorBooks(firebaseKey).then(setBooks);
  };

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
    getBookCards();
  }, [firebaseKey]);

  return (
    <>
      <div className="d-flex">
        <div className="mt-5">
          <img src={authorDetails.image} alt={authorDetails.first_name} style={{ height: '400px', width: '300px', margin: '10px' }} />
        </div>
        <div className="d-flex flex-column text-white mt-5 details">
          <h2>
            {authorDetails.first_name} {authorDetails.last_name}
            {authorDetails.favorite ? ' 🤍' : ''}
          </h2>
          <h4>Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a></h4>
        </div>
      </div>
      <br />
      <h3 className="text-white ms-5 details">Author Books</h3>
      <div className="d-flex flex-wrap">
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorBooks} />
        ))}
      </div>
    </>
  );
}
