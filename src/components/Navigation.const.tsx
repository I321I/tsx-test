
import { AnimeList } from "./AnimeList";
import EmptyContent from "./EmptyContent";
import { PetitionList } from "./PetitionList";
import { InputField } from "./InputField";
import { Counter } from "./Counter";
import { UrlFetch } from "./UrlFetch";
import { UrlDataDisplay } from "./UrlDataDisplay";
import { ToDoListRedux } from "./ToDoList_redux";

export const navigationConfig = [
    { to: "/", label: "App", element: () => <AnimeList /> },
    { to: "/empty-content", label: "Empty Content", element: () => (<EmptyContent />) },
    { to: "/petition-list", label: "Petition List", element: (data: unknown, onClick?: (url: string) => void) => (<PetitionList data={data} onClick={onClick} />) },
    { to: "/input-field", label: "Input Field", element: (data: unknown) => (<InputField data={data} />) },
    { to: "/counter", label: "Counter", element: () => (<Counter />) },
    { to: "/url-fetch", label: "Url Fetch", element: () => (<UrlFetch />) },
    { to: "/url-data-display", label: "Url Data Display", element: () => (<UrlDataDisplay />) },
    { to: "/todo-list-redux", label: "Todo List Redux", element: () => (<ToDoListRedux />) }
]