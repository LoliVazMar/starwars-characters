import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(null)


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, []);


    //---ESTA ES OTRA FORMA DE HACER EL FETCH, PERO CREO QUE LA ANTERIOR ES MAS CORRECTA---

    // useEffect(() => {
    //   getCharacters();
    // }, [])

    // const getCharacters = async () => {
    //   try {
    //     const response = await fetch(CHARACTERS_ENDPOINT);
    //     const data = await response.json();
    //     setCharacters(data.results);
    //   } catch (error) {
    //     console.error('Error al obtener los personajes:', error);
    //   }
    // }

    return [characters, loading, error] ;
}


