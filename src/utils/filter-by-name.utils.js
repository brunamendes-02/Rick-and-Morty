export const filterByName = (data) => {
    const currentData = [];
    data?.results?.map((result) => {
        return currentData.push(result)
    })
    const sortedData = currentData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    return sortedData;
}