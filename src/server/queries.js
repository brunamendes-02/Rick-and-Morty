import { gql } from '@apollo/client'

const getAllCharacters = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
      id
      status
      name
      image
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

// const getAllCharacterByName = gql`
//   query CharacterByName($page: Int, $name: String) {
//     characters(page: $page, filter: {name: $name}) {
//       results {
//       name
//       image
//       status
//       origin {
//         name
//       }
//       episode {
//         name
//         air_date
//       }
// 		}
//   }
// }`

const getAllEpisodes = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        characters {
          name
        }
      }
  }
}`

// const getAllEpisodeByName = gql`
//   query EpisodeByName($page: Int, name: String) {
//     episodes(page: $page, filter: {name: $name}) {
//       results {
//         name
//         air_date
//         characters {
//           name
//         }
//       }
//   }
// }`

export { 
  getAllCharacters,
  getAllEpisodes ,
  // getAllCharacterByName, 
  // getAllEpisodeByName
}