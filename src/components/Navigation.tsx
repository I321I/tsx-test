import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import { AnimeList } from "./AnimeList";
import EmptyContent from "./EmptyContent";

export const navigationConfig =[
    {to: "/", label: "App", element: <AnimeList/>},
    {to: "/emptycontent", label: "Empty Content", element: <EmptyContent/>},
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
        </Nav>
    );
}
