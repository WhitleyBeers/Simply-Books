import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
  // TODO: Set a state for books
  // TODO: Get user ID using useAuth Hook
  // TODO: create a function that makes the API call to get all the books
  // TODO: make the call to the API to get all the books on component render

  // TODO: STRETCH - for search...

  return (
    <div className="text-center my-4">
      <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link>
      {/* TODO: map over books here using BookCard component */}
    </div>
  );
}

export default Home;
