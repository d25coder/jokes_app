//helps with duplicating data 
const paginationResults =(obj)=> {

// empty object; store results in results
    let results = {}

    const query = obj.query ? obj.query : {}

    let page = parseInt(query.page) || 1
    let limit = parseInt(query.limit) || 12 //limits 12 queries per page

    //line 12-13 limits where to start and end a page
    const startIdx = (page - 1) * limit
    const endIdx = page * limit

    results.page = page
    results.limit = limit
    results.startIdx = startIdx
    results.endIdx = endIdx 

    return results
}

const buildJokeArr =(arr, arr2, start, end, page)=> {
    let results = {}
// took jokesRoutes jokes array to loop through the data
     for (let i = start; i < end; i++) { //if the item is not undefined, take that item and store in the array
        if (arr[i] != undefined) {
            arr2 = [...arr2, arr[i]]
        }
    }
// this allows us to navigate through pages
    const prev = page > 1 ? page - 1 : null
//is the end index >= the array, its null, other wise next page
    const next = end >= arr.length ? null : page + 1

    results.arr = arr2
    results.prev = prev
    results.next = next

    return results
}

module.exports = {
    paginationResults,
    buildJokeArr
}