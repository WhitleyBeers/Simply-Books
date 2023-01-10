import { useRouter } from 'next/router';
import React from 'react';

export default function Search() {
  const router = useRouter();
  const { urlQuery, type, string } = router.query;

  return (
    <div>
      <h2>Query: {urlQuery}</h2>
      <h2>Type: {type}</h2>
      <h2>string: {string}</h2>
    </div>
  );
}
