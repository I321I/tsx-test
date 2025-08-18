import { Component2 } from "./Component2"
import "./AnimeList.css"
import i from "./Component2";
import { recentUpdateAnime } from "../constant";
import { AnimeItem } from "./AnimeItem";
import { useState } from "react";

export const AnimeList = () => {
  const [count, setCount] = useState(8)
  const [word, setWord] = useState("hello,")
  const result = recentUpdateAnime.map((anime, index) => {
    return <div style={{ color: `#${index}${index}${index}` }}>{anime != null && anime} </div>
  })
  const animeList = recentUpdateAnime.map((anime) => <AnimeItem title={anime} />)
  //onst separateAnimeItem = 
  return (
    <div id="firstDiv">
      {count + word}
      {result}
      {animeList}
      <button onClick={() => {setCount(count + 1); setWord(word + "world" )}}></button>
    </div>
  )
}
