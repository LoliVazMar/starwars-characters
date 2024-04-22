import './App.css';
import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Cards from './components/Molecules/Cards';
import Browser from './components/Molecules/Browser';
import Header from './components/Molecules/Header';
import Footer from './components/Molecules/Footer';

const CHARACTERS_ENDPOINT = 'https://swapi.dev/api/people/'

function App() {
  const [characters, loading, error] = useFetch(CHARACTERS_ENDPOINT)
  const [endSearch, setEndSearch] = useState('')

  const handleEndSearch = (e) => {
    setEndSearch(e.target.value)
  }

  const filteredCharacters = characters.filter(
    (character) =>
      character.name.toLowerCase().includes(endSearch.toLowerCase())
  )
  filteredCharacters.sort((a, b) => a.name.localeCompare(b.name))

  return (
      <div className="contenido w-full h-dvh bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        <Header />
        <div className="w-full mt-4 p-3">
          <Browser handleEndSearch={endSearch} onChange={handleEndSearch} />
        </div>
        <div className="card w-full grid grid-cols-1 max-w-7xl mx-auto gap-4 mt-4 p-3 md:px-20 md:grid-cols-2 lg:grid-cols-3">
          {error && <p className='w-full text-red-600 text-center mx-auto'>Error al obtener los personajes</p>}
          {loading && <p className='text-white'>Loading...</p>}
          <Cards characters={filteredCharacters} />
        </div>
        <div className="w-full bottom-0 mt-4">
          <Footer />
        </div>
      </div>
  )
}

export default App;
