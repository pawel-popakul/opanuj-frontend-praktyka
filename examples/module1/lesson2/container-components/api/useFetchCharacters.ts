import { useEffect, useState } from 'react';
import type { Character } from '../types/Character';

interface SearchParams {
  name: string;
  gender: string;
}

export const useFetchCharacters = (params: SearchParams): Character[] => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const { name, gender } = params;

  useEffect(() => {
    if (name || gender) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
      )
        .then((response) => response.json())
        .then((data) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender]);

  return characters;
};
