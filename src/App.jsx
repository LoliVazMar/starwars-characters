import './App.css';
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Cards from './components/Cards';
import Browser from './components/Browser';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <div className="w-full h-dvh bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        <Header />
        <div className="w-full mt-4 p-3">
          <Browser handleEndSearch={endSearch} onChange={handleEndSearch} />
        </div>
        <div className="card grid grid-cols-1 max-w-6lx mx-auto gap-4 mt-4 p-3 md:px-20 md:grid-cols-3 lg:grid-cols-4">
          {error && <p>Error al obtener los personajes</p>}
          {loading && <p>Loading...</p>}
          <Cards characters={filteredCharacters} />
        </div>
        <div className="w-full absolute bottom-0 mt-4">
          <Footer />
        </div>
      </div>
  )
}

export default App;
