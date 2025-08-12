import { Component2 } from "./Component2"
import "./Component.css"
import i from "./Component2";
import { recentUpdateAnime } from "../constant";
import { AnimeItem } from "./AnimeItem";

export const Component = () => {
    const result = recentUpdateAnime.map((anime, index) => {
        return <div style={{ color: `#${index}${index}${index}` }}>{anime != null && anime} </div>
    })
    // const separateAnimeItem = 
    return <div id="firstDiv">{result}
        <AnimeItem cAnime={recentUpdateAnime[2]}>
        </AnimeItem><Component2></Component2><Component2></Component2></div>
}
