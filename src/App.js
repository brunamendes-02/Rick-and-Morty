import { useQuery } from '@apollo/client'
import { getAllCharacters } from './server/queries'
import Card from './components/card/card'

const App = () => {
  const { loading, error, data } = useQuery(getAllCharacters, {
    variables: { page: 3 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <div>
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.id} />
        )}
      </div>
    </>

  )
}

export default App