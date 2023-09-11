import React, { useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { IMAGE_BASE_URL } from '../utils/utilities';
import { BsPlayFill } from 'react-icons/bs';

export const Hero = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getPopularMovies();
    },[])

    const getPopularMovies = () => {
        GlobalApi.getPopularMovies().then(
            (response) => {
                setMovieList(response.data.results[Math.floor(Math.random()*19)]);
            },
            (error) => {
                console.write("Fails to Load data", error);
            }
        )
    }

  return (
    <div>
        <div className="absolute h-[85vh] bg-gradient-to-t from-[#1e2126] vie-transparent to-transparent w-full"/>

        <div className='absolute mt-[400px] md:mt-[350px] px-10 md:px-24'>
            <h2 className='text-white text-[19px] lg:text-[27px]'>Watch only on HULU</h2>
            <h2 className='text-white text-[36px] lg:text-[47px] font-bold'>{movieList.original_title}</h2>
            <div className='flex gap-5 mt-5'>
                <button className='flex bg-gray-700 text-white border-2 border-white cursor-pointer hover:border-blue-500 p-2 px-5 rounded-md font-[500] transition-all duration-400 ease-in-out'><BsPlayFill className='mt-1 mr-2'/>PLAY</button>
                <button className='bg-transparent border-2 border-white cursor-pointer hover:border-gray-500 p-2 px-5 rounded-md font-[500] transition-all duration-400 ease-in-out'>DETAILS</button>
            </div>
        </div>
        <img className='h-[85vh] object-cover' src={IMAGE_BASE_URL+movieList.backdrop_path} alt={movieList.original_title} width={1920} height={1080}/>
    </div>
  )
}
