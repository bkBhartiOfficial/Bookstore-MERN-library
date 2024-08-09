import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { RiBook2Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModel from './BookModel';

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-blue-600 rounded-lg'>
        {book.score}
      </h2>
      <h4 className='my-2 text-gray-200'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <RiBook2Line className='text-blue-300 text-2xl' />
        <h2 className='my-1 text-gray-200'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <RxPerson className='text-blue-300 text-2xl' />
        <h2 className='my-1 text-gray-200'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-600 hover:text-blue-100 cursor-pointer'
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-400 hover:text-green-100' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-400 hover:text-yellow-100' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-100' />
        </Link>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;