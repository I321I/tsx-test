import { lazy } from 'react'
const AnimeList = lazy(() => import("./AnimeList").then(module => ({ default: module.AnimeList })))
const EmptyContent = lazy(() => import("./EmptyContent"))
const PetitionList = lazy(() => import("./PetitionList").then(module => ({ default: module.PetitionList })))
const InputField = lazy(() => import("./InputField").then(module => ({ default: module.InputField })))
const Counter = lazy(() => import("./Counter").then(module => ({ default: module.Counter })))
const UrlFetch = lazy(() => import("./UrlFetch").then(module => ({ default: module.UrlFetch })))
const UrlDataDisplay = lazy(() => import("./UrlDataDisplay").then(module => ({ default: module.UrlDataDisplay })))
const ToDoList = lazy(() => import("./ToDoList_redux").then(module => ({ default: module.ToDoList })))
const ToDoListAPI = lazy(() => import("./ToDoList_API").then(module => ({ default: module.ToDoListAPI })))
const ToDoListMiddleware = lazy(() => import("./ToDoList_middleware").then(module => ({ default: module.ToDoListMiddleware })))


export const navigationConfig = [
    { to: "/", label: "App", element: () => <AnimeList /> },
    { to: "/empty-content", label: "Empty Content", element: () => (<EmptyContent />) },
    { to: "/petition-list", label: "Petition List", element: (data: unknown, onClick?: (url: string) => void) => (<PetitionList data={data} onClick={onClick} />) },
    { to: "/input-field", label: "Input Field", element: (data: unknown) => (<InputField data={data} />) },
    { to: "/counter", label: "Counter", element: () => (<Counter />) },
    { to: "/url-fetch", label: "Url Fetch", element: () => (<UrlFetch />) },
    { to: "/url-data-display", label: "Url Data Display", element: () => (<UrlDataDisplay />) },
    { to: "/todo-list-redux", label: "Todo List Redux", element: () => (<ToDoList />) },
    { to: "/todo-list-API", label: "Todo List API", element: () => (<ToDoListAPI />) },
    { to: "/todo-list-Middleware", label: "Todo List Middleware", element: () => (<ToDoListMiddleware />) }
]