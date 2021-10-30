export const filterByName = (data) => {
    return data?.results?.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
}