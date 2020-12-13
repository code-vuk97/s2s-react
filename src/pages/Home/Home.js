import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard';
import withLoader from '../../HOC/withLoader';
import styles from './home.module.css';

const Home = ({setLoading}) => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback(async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6');
    setCharacters(data);
    setLoading(false);
  }, [setCharacters, setLoading]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      <div class={styles['hero']}>
        <h1 className={styles['hero-title']}>Rick and Morty App</h1>
      </div>
      <div className="showcase">
        {characters.map(({id, name, status, species, location, created, image}) => (
          <CharacterCard
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            location={location}
            created={created}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}

export default withLoader(Home);
