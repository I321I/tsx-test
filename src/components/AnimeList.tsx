import { Component2 } from "./Component2"
import "./AnimeList.css"
import i from "./Component2";
import { recentUpdateAnime } from "../constant";
import { AnimeItem } from "./AnimeItem";

export const AnimeList = () => {
  const result = recentUpdateAnime.map((anime, index) => {
    return <div style={{ color: `#${index}${index}${index}` }}>{anime != null && anime} </div>
  })
  const animeList = (recentUpdateAnime: any) => {
    let list = []
    for (let index = 0; index < recentUpdateAnime.length; index++) {
      list.push(<AnimeItem cAnime={recentUpdateAnime[index]} />)
    }
    return list
  }
  
  //onst separateAnimeItem = 
  return (
    <div id="firstDiv">
      {result}
      {animeList(recentUpdateAnime)}
      {/* <AnimeItem cAnime={recentUpdateAnime[2]}>
      </AnimeItem> */}
    </div>
  )
}
