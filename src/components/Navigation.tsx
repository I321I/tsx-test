import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import { AnimeList } from "./AnimeList";
import EmptyContent from "./EmptyContent";
import { PetitionList } from "./PetitionList";

export const navigationConfig = [
    { to: "/", label: "App", element: <AnimeList /> },
    { to: "/empty-content", label: "Empty Content", element: <EmptyContent /> },
    { to: "/petition-list", label: "Petition List", element: <PetitionList /> },
]

export default function Navigation() {
    const location = useLocation()
    return (
        <Nav variant="tabs" defaultActiveKey={location.pathname}>
            <Nav.Item>
                <Nav.Link as={NavLink} to={navigationConfig[0].to}>{navigationConfig[0].label}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to={navigationConfig[1].to}>{navigationConfig[1].label}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to={navigationConfig[2].to}>{navigationConfig[2].label}</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
