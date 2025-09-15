import { recentUpdateAnime } from "../constant";
import Button from 'react-bootstrap/Button';


interface AnimeItemProps {
    title?: string
    onClick: () => void
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title, onClick }) => {
    return (
        <div id="AnimeItem"> {title}
            <Button variant="secondary" onClick={onClick}>X</Button>
        </div>
    )
}