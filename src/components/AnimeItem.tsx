import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton'
import { useState } from "react";

interface AnimeItemProps {
    title?: string
    onClick: () => void
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title, onClick }) => {
    const [tit, setTit] = useState(title)
    return (
        <ListGroup.Item id="AnimeItem" className="d-flex justify-content-between"> 
            {title} {tit}
            <CloseButton variant="secondary" onClick={onClick} />
        </ListGroup.Item>
    )
}