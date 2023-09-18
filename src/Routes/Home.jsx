import React from 'react'
import NavBar from '../components/UI/NavBar';
import PokeList from '../components/Pokemon/PokeList';
import Footer from '../components/UI/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <PokeList />
      <Footer />
    </div>
  )
}

export default Home