import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterPage = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/' + id)
      .then((result) => console.log(result.data));
  }, [])
  return (
    <div>
      Page for the character with id: {id}
    </div>
  )
}

export default CharacterPage;
