import Image from 'next/image';
import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="text-center my-4">
      <Image src={user.photoURL} alt="userURL" height="100px" width="100px" />
      <h1>Name: {user.displayName}</h1>
      <h3>Email: {user.email}</h3>
      <h4>Last Login: {user.metadata.lastSignInTime}</h4>
      <Button type="button" size="md" className="copy-btn my-2" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
