import "./AnimeItem.css"
import { recentUpdateAnime } from "../constant";
interface AnimeItemProps {
    title?: string
    onClick: () => void
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title, onClick }) => {
    return (
        <div id="AnimeItem"> {title}
            <button onClick={onClick}>X</button>
        </div>
    )
}