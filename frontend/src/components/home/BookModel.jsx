import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { MdLibraryBooks } from "react-icons/md";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-gray-900 rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-blue-600 rounded-lg'>
          {book.score}
        </h2>        
        <div className='mt-4 flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-blue-300 text-2xl' />
          <h2 className='my-1 text-gray-200'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-blue-300 text-2xl' />
          <h2 className='my-1 text-gray-200'>{book.author}</h2>
        </div>
        <p className='mt-4 text-gray-200'>Book Description:</p>
        <div className='flex justify-start items-center gap-x-2'>
          <MdLibraryBooks className='text-blue-300 text-2xl' />
          <h2 className='my-1 text-gray-200'>{book.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModel;