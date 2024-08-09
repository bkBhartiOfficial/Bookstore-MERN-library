import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Function to format the date in ddmmyyyy format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl text-gray-200 my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Date Created</span>
            <span>{formatDate(Date(book.createdAt))}</span>
          </div>
          <div className='my-4 text-gray-400'>
            <span className='text-xl mr-4 text-gray-300'>Last Updated</span>
            <span>{formatDate(Date(book.updatedAt))}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;