import styles from './card.css';

const Card = ( { character } ) => {
    return (
      <div className={styles.cardContainer}>
        <img src={character.image} alt="character" />
        <div>
          <h5 className={styles.name}>{character.name}</h5>
          <p>
            {character.status} - {character.species}
          </p>
  
          <h6>Last known location</h6>
          <p>{character.location.name}</p>
        </div>
      </div>
    )
  }
  
  export default Card