import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';

function Card({ book }) {
  const { coverImage, price, genre, author, title } = book;

  return (
    <section className='flex flex-col flex-wrap items-center justify-center gap-y-2 rounded-md max-w-[200px] h-max-[500px] shadow-lg  flex-grow-1
    mt-4'>
      {coverImage && <img className='w-[100px] h-[100px] rounded-sm' src={coverImage} alt={title} />}

      <h2>{title}</h2>
      <p><b>Author:</b> {typeof author === 'string' ? author : 'Unknown Author'}</p>
      <p><b>Price:</b> ${price ? price.toFixed(2) : 'N/A'}</p>
      <p><b>Genre:</b> {genre || 'N/A'}</p>
    </section>
  );
}

export default Card;
