/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getFavoriteAuthor } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getAllFavoriteAuthors = () => {
    getFavoriteAuthor(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllFavoriteAuthors();
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavoriteAuthors} />
      ))}
    </div>
  );
}
