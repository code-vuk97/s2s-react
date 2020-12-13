import React from 'react'
import CharacterCard from '../../components/CharacterCard';
import CharacterForm from '../../components/CharacterForm';
const CreateCharacter = () => {
  return (
    <div className="create-character-page">
      <CharacterForm />
      <CharacterCard />
    </div>
  )
}

export default CreateCharacter
