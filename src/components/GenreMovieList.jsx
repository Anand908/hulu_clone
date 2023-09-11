import React from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';
import GenreList from '../constant/GenreList';
import { MovieList } from './MovieList';

export const GenreMovieList = () => {
  return (
    <div className='mt-8 m-2 md:m-5 md:mx-20'>
        { GenreList.genere.map((item, index) => index<5 && (
            <div key={index} className="mb-[0.5rem] md:mb-10">
                <h2 className='text-white text-[20px] font-bold'>{item.name}
                    <span className='font-normal text-[16px] cursor-pointer text-gray-400 float-right flex'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1 mt-1' /></span>
                </h2>
                <MovieList genreId={item.id} />
            </div>
        )) }
    </div>
  )
}

export default GenreMovieList;