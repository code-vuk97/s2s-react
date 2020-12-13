import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import themeContext from '../../context/themeContext';

const CharacterCard = ({
  id = 1,
  image= '',
  name='Vuk Stefanovic',
  status='Alive',
  species='Human',
  location={name: 'Earth'},
  created='24 July 1997',
}) =>  {
  const [theme, setTheme] = useContext(themeContext);

  return (
  <article className={`character-card ${theme === 'light'? 'character-card-light': ''}`}
    onClick={() => setTheme(theme !== 'light'? 'light':'dark')}
  >
    <div className="image-wrapper">
      <img src={image} alt=""/>
    </div>

    <div className="content-wrapper">
      <section>
        <Link to={`/character/${id}`}>
          <h2>{name}</h2>
        </Link>
        <span className="status">
          <span className="status-icon"></span>
          {status} - {species}
        </span>
      </section>

      <section>
        <span className="text-gray">Last known location:</span>
        <h5>{location.name}</h5>
      </section>

      <section>
        <span className="text-gray">Created:</span>
        <h5>{created}</h5>
      </section>
    </div>
  </article>
)};


export default CharacterCard
