import React from 'react'
import GenreMovieList from '../components/GenreMovieList'
import Header from '../components/Header'
import { Hero } from '../components/Hero'

function Home() {
  return (
    <div>
        
        <Header />

        <Hero />

        <GenreMovieList />

    </div>
  )
}

export default Home