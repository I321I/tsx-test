import { recentUpdateAnime } from "../constant";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton'

interface AnimeItemProps {
    title?: string
    onClick: () => void
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title, onClick }) => {
    return (
        <ListGroup.Item id="AnimeItem" className="d-flex justify-content-between"> {title}
            <CloseButton variant="secondary" onClick={onClick}/>
        </ListGroup.Item>
    )
}