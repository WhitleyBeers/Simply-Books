import axios from 'axios';
import { clientCredentials } from '../utils/client';
// API CALLS FOR BOOKS

const dbUrl = clientCredentials.databaseURL;

const getBooks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

const updateBook = (bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(resolve)
    .catch(reject);
});

export {
  getBooks,
  createBook,
  deleteBook,
  getSingleBook,
  updateBook,
};
