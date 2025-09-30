import { useEffect, useState, type JSX, type JSXElementConstructor } from "react"
import { data, useActionData } from "react-router"

interface PotitionListProps {
    title?: string
    onClick?: () => void
}
export const PetitionList: React.FC<PotitionListProps> = ({ title, onClick }) => {
    const [url, setUrl] = useState('https://soa.tainan.gov.tw/Api/Service/Get/3a6a5741-b4f1-4db5-a5ce-a08ffc334a11')
    const pItem = [
        'https://soa.tainan.gov.tw/Api/Service/Get/3a6a5741-b4f1-4db5-a5ce-a08ffc334a11',
        'https://soa.tainan.gov.tw/Api/Service/Get/151f1365-a992-447f-a0bb-fb6c90bd7610',
        'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=KONI7prP3jgu&IsTransData=1'
    ]
    const reg = /.+\/(.+)/
    const pList = pItem.map((item) =>
        <button type="button" className="btn btn-link"
            onClick={() => { setUrl(item) }}>
            {reg.exec(item)?.[1]}
        </button>
    )
    const [data, setData] = useState<object>()
    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        })()
    }, [url])
    return (
        <div>
            {pList}
            {JSON.stringify(data)}
        </div>
    )
}

