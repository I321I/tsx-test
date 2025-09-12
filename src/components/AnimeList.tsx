import "./AnimeList.css"
import { recentUpdateAnime } from "../constant";
import { AnimeItem } from "./AnimeItem";
import { useEffect, useState } from "react";


export const AnimeList = () => {
  const [count, setCount] = useState(8)
  const [word, setWord] = useState("hello,")
  const [animeSource, setSource] = useState<string[]>([])
  useEffect(() => {
    setSource(recentUpdateAnime)
  }, [])
  const animeList = animeSource.map((anime, i) =>
    <AnimeItem title={anime} onClick={
      () => {
        setSource(
          [
            ...animeSource.slice(0, i),
            ...animeSource.slice(i + 1, animeSource.length)
          ]
        )
      }} />)
  const [, ...rest] = animeSource
  //onst separateAnimeItem = 
  return (
    <FirstDiv>
      <TitleDiv>Recent Update Anime</TitleDiv>
      {count + word}1
      <AnimeListDiv>
        {animeList}
      </AnimeListDiv>

      <button onClick={() => {
        setCount(count + 1); setWord(word + "world");
        setSource(rest)
      }}></button>
    </FirstDiv>
  )
}
