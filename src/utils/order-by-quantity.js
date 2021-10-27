export const orderByQuantity = (count, data, parameter) => {
    const currentData = [];
    if(parameter === 'episode')
        data?.results?.map((character) => {
            currentData.push({
                ...character,
                quantity: character.episode.length,
            })
        })
    if(parameter === 'character')
        data?.results?.map((character) => {
              currentData.push({
                ...character,
                quantity: character.characters.length,
            })
        })
    
    let sortedByQuantity;
    switch(count) {
      case "more":
        sortedByQuantity = currentData.sort((a,b) => (a.quantity > b.quantity) ? -1 : ((b.quantity > a.quantity) ? 1 : 0))
      break;
      case "less":
        sortedByQuantity = currentData.sort((a,b) => (a.quantity > b.quantity) ? 1 : ((b.quantity > a.quantity) ? -1 : 0))
        break;
        default:
          return;
    }
    return sortedByQuantity;
  }