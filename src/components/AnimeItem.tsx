import "./AnimeItem.css"
import { recentUpdateAnime } from "../constant";
interface AnimeItemProps {
    cAnime?: string
}
export const AnimeItem: React.FC<AnimeItemProps> = (prop) => {
    const { cAnime } = prop
    return <div id="AnimeItem"> {cAnime}</div>
}