import { useEffect, useState } from "react"
import { useRootSelector } from "../store/StoreConfigure"
import { Stack } from "react-bootstrap"


export const UrlFetch: React.FC = () => {
    const UrlPosition = useRootSelector((store) => store.UrlReducer.UrlState)
    const [objectData, setData] = useState<unknown>()
    useEffect(() => {
        (async () => {
            const response = await fetch(UrlPosition)
            const data: object | object[] = await response.json()
            setData(data)
        })()
    }, [UrlPosition])


    return (
        <div>
            <Stack gap={1}>
                <div className="p-2">{UrlPosition}</div>
                <div className="p-2">{JSON.stringify(objectData)}</div>
            </Stack>

        </div>

    )
}