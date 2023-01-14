import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createAuthor, updateAuthor } from '../../api/authorData';

const initialState = {
  email: '',
  firebaseKey: '',
  first_name: '',
  last_name: '',
  image: '',
  favorite: false,
};

export default function AuthorForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAuthor(formInput)
        .then(() => router.push(`/author/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createAuthor(payload).then(() => {
        router.push('/authors');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>

      {/* NAME INPUT */ }
      <FloatingLabel controlId="floatingInput1" label="Author First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author First Name"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Author Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author Last Name"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* EMAIL INPUT */ }
      <FloatingLabel controlId="floatingInput3" label="Email Address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email Address"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT */ }
      <FloatingLabel controlId="floatingInput4" label="Author Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* FAVORITE INPUT */ }
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};
