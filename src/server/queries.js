import { gql } from '@apollo/client'

const getCharacterByName = gql`
  query CharacterByName($name: String) {
    characters(filter: {name: $name}) {
      results {
      name
      image
      status
      origin {
        name
      }
      episode {
        name
        air_date
      }
		}
  }
}`

const getEpisodeByName = gql`
  query EpisodeByName($name: String) {
    episodes(filter: {name: $name}) {
      results {
        name
        air_date
        characters {
          name
        }
      }
  }
}`

export { 
  getCharacterByName, 
  getEpisodeByName
}