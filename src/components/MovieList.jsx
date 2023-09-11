import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { MovieCard } from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

export const MovieList = ({genreId}) => {

    const elementRef = useRef();

    const [movieList, setMovieList] = useState([]);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [scrollRight, setScrollRight] = useState(true);

    useEffect(() => {
        GlobalApi.getMovieByGenreId(genreId).then(
            (response) => {
                setMovieList(response.data.results);
            },
            (error) => {
                console.write("Failed to load Data",error);
            }
        )
    }, []);

    const sliderLeft=(element) => {
        element.scrollLeft-=500;
    }

    const sliderRight=(element) => {
        element.scrollLeft+=500;
    }

    // const handleScroll = (element) => {
    //     if (element) {
    //     const isAtEnd = element.scrollLeft + element.clientWidth === element.scrollWidth;
    //     if (isAtEnd) {
    //         // Perform your task here when the scrollbar reaches the end
    //         console.log('Scrollbar reached the end!');
    //     }
    //     }
    // };

    const scrollMenthod = (element) => 
    {
        if(element)
        {
            const isAtStart = element.scrollLeft > 0;
            if(isAtStart)
                setScrollLeft(true);
            else
                setScrollLeft(false);

            const isAtEnd = element.scrollLeft + element.clientWidth === element.scrollWidth;
            if (isAtEnd) 
                setScrollRight(false);
            else
                setScrollRight(true);
        }
    }

  return (
    <div className='flex items-center'>
        {scrollLeft && <IoChevronBackOutline onClick={() => sliderLeft(elementRef.current)}  className='text-[40px] text-white bg-[rgba(0,0,0,0.3)] backdrop-blur-lg p-2 z-10 cursor-pointer mb-[120px] rounded-full hidden md:block '/>}
        <div onScroll={() => scrollMenthod(elementRef.current)} className='w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide md:ml-[-20px] md:mr-[-20px]' ref={elementRef}>
            { movieList.map((item, index) => index<7 && (
                <MovieCard movie={item} id={index} key={index}/>
            )) }
        </div>
        {scrollRight && <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)}  className='text-[40px] text-white hidden md:block bg-[rgba(0,0,0,0.3)] backdrop-blur-lg p-2 z-10 cursor-pointer mb-[120px] rounded-full'/>}
    </div>
  )
}
