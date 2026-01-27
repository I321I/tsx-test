import { Nav } from "react-bootstrap";
import { NavigationType, NavLink, useLocation } from "react-router";
import { AnimeList } from "./AnimeList";
import EmptyContent from "./EmptyContent";
import { PetitionList } from "./PetitionList";
import { InputField } from "./InputField";
import type { JSX } from "react";
import { Counter } from "./Counter";
import { UrlFetch } from "./UrlFetch";
import { UrlDataDisplay } from "./UrlDataDisplay";
import { ToDoList } from "./ToDoList";

interface Navigation {
    to: string;
    label: string;
    element: (data: any) => JSX.Element;
}

export const navigationConfig = [
    { to: "/", label: "App", element: () => <AnimeList /> },
    { to: "/empty-content", label: "Empty Content", element: () => (<EmptyContent />) },
    { to: "/petition-list", label: "Petition List", element: (data: any, onClick: any) => (<PetitionList data={data} onClick={onClick} />) },
    { to: "/input-field", label: "Input Field", element: (data: any) => (<InputField data={data} />) },
    { to: "/counter", label: "Counter", element: () => (<Counter />) },
    { to: "/url-fetch", label: "Url Fetch", element: () => (<UrlFetch />) },
    { to: "/url-data-display", label: "Url Data Display", element: () => (<UrlDataDisplay />) },
    { to: "/to-do-list", label: "To Do List", element: () => (<ToDoList />) }
]


export default function Navigation() {
    const location = useLocation()
    const navigationTabs =
        navigationConfig.map((tab) =>
            <Nav.Item>
                <Nav.Link as={NavLink} to={tab.to}>{tab.label}</Nav.Link>
            </Nav.Item>
        )

    return (
        <Nav variant="tabs" defaultActiveKey={location.pathname}>
            {navigationTabs}
        </Nav>
    );
}
