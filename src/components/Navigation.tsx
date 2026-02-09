import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import type { JSX } from "react";
import { navigationConfig } from "./Navigation.const";

interface Navigation {
    to: string;
    label: string;
    element: (data: unknown, onClick?: (url: string) => void) => JSX.Element;
}

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
