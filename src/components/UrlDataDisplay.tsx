import { useEffect, useReducer, useState } from "react"
import { useRootSelector } from "../main"
import { Stack } from "react-bootstrap"


export const UrlDataDisplay: React.FC = () => {
    const DataState = useRootSelector((store) => store.UrlReducer.DataState)

    return (
        <div>
            {JSON.stringify(DataState)}
        </div>

    )
}