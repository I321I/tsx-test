import { recentUpdateAnime } from "../constant";
import { AnimeItem } from "./AnimeItem";
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export const AnimeList = () => {
  const [count, setCount] = useState(8)
  const [word, setWord] = useState("hello,")
  const [animeSource, setSource] = useState<string[]>([])
  useEffect(() => {
    setSource(recentUpdateAnime)
  }, [])
  const animeList =
    animeSource.map((anime, i) =>
      <AnimeItem key={anime} title={anime} onClick={
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
    <div className="FirstDiv">
      <div className="TitleDiv">Recent Update Anime</div>
      {count + word}1
      <div className="AnimeListDiv">
        <ListGroup>
          {animeList}
        </ListGroup>
      </div>

      <button onClick={() => {
        setCount(count + 1); setWord(word + "world");
        setSource(rest)
      }}></button>
    </div>
  )
}
