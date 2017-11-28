const { map, filter, flow } = require('lodash/fp')
//const flow = require('lodash/fp/flow')
const animeList = require('./anime')
const animeGenres = require('./anime_genres')

//const result = map((x) => x.titles) (anime)

const result = flow(
    map((anime) => ({
       title: anime.titles,
       genres: flow(
           filter((x) => x.anime_id === anime.id),
           map((x) => x.genre_id) 
       )(animeGenres)
    }))
)(animeList)


console.log(result)