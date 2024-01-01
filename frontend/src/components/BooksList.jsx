import React,{useContext} from 'react'

import { BooksContext} from './BooksContext';
import Card from './Card';

function BooksList() {
    const { books } = useContext(BooksContext);
  return (
    <div className='flex items-center justify-center  gap-x-5 flex-wrap '>
       {books.map((book)=>(
        <Card key={book.id} book={book} />
       ))}
      
    </div>
  )
}

export default BooksList
