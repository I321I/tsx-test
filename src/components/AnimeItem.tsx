import { recentUpdateAnime } from "../constant";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const preButton = styled.button`
    border-width: 0px;
    border-radius: 3px;
    padding: 5px 20px;
    `

const AnimeItemDiv = styled.div`
    background-color: rgba(130, 96, 150, 0.322);
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;
    padding: 3px 10px;
`

interface AnimeItemProps {
    title?: string
    onClick: () => void
}
export const AnimeItem: React.FC<AnimeItemProps> = ({ title, onClick }) => {
    return (
        <AnimeItemDiv id="AnimeItem"> {title}
            <Button variant="secondary" onClick={onClick}>X</Button>
        </AnimeItemDiv>
    )
}