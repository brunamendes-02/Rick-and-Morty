import { gql } from '@apollo/client'

const getCharacterByName = gql`
  query CharacterByName($page: Int, $name: String) {
    characters(page: $page, filter: {name: $name}) {
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
  query EpisodeByName($page: Int, $name: String) {
    episodes(page: $page, filter: {name: $name}) {
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