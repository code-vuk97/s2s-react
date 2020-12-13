import React, { useState } from 'react'

const CharacterForm = () => {
  const [name, setName] = useState('Enter Name');
  const [location, setLocation] = useState('Earth');
  const [species, setSpecies] = useState('Elf');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="location">
          Location
          <input type="text" location="location" id="location" value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="species">
          Species
          <input type="text" species="species" id="species" value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default CharacterForm
