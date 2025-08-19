import "./AnimeItem.css"
import { recentUpdateAnime } from "../constant";
interface AnimeItemProps {
    title?: string
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title }) => {
    return <div id="AnimeItem"> {title}<button></button></div>
}