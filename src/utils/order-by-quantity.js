export const orderByQuantity = (order, datas, parameter) => {
     const currentData = datas?.results?.map((data) => {
        return {
            ...data,
            quantity: parameter === "episode" ? data.episode.length : data.characters.length ,
        }
    })
    
    let sortedByQuantity;
    switch(order) {
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