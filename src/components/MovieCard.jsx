import React from 'react'
import { IMAGE_BASE_URL } from '../utils/utilities'

export const MovieCard = ({movie,id}) => {
  return (
    <div className='overflow-hidden h-[12rem] md:h-80 w-[10.5rem] md:w-[22.5rem] inline-block m-1 md:m-3 cursor-pointer group'>
        <img className='w-[190px] md:w-[360px] object-cover rounded-2xl group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out' src={IMAGE_BASE_URL+movie.backdrop_path} alt="Movie Backdrop Image" />
        <h2 className='text-gray-400 mt-2 text-[12px] md:text[17px] font-bold'>{id%2==0? 'WATCH MOVIE' : 'START WATCHING'}</h2>
        <h2 className='w-[230px] md:w-[270px] text-white mt-1 transition-all md:text-[22px] group-hover:font-bold whitespace-normal'>{movie.original_title}</h2>
    </div>
  )
}
