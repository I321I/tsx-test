import { useEffect, useState, type JSX, type JSXElementConstructor } from "react"
import { data, useActionData } from "react-router"

interface PotitionListProps {
    title?: string
    onClick?: () => void
}

const petitionItem = [
    {
        url: 'https://soa.tainan.gov.tw/Api/Service/Get/3a6a5741-b4f1-4db5-a5ce-a08ffc334a11',
        getData: (item: object) => "data" in item ? item.data : []
    },
    {
        url: 'https://soa.tainan.gov.tw/Api/Service/Get/151f1365-a992-447f-a0bb-fb6c90bd7610',
        getData: (item: object) => "data" in item ? item.data : []
    },
    {
        url: 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=KONI7prP3jgu&IsTransData=1',
        getData: (item: object) => item
    }
]
export const PetitionList: React.FC<PotitionListProps> = ({ title, onClick }) => {
    const pItem = petitionItem
    const [url, setUrl] = useState(pItem[0].url)
    const [getData, setGetData] = useState(() => pItem[0].getData)
    const reg = /.+\/(.+)/
    const pList = pItem.map((item) =>
        <button type="button" className="btn btn-link"
            onClick={() => { setUrl(item.url), setGetData(item.getData)}}>
            {reg.exec(item.url)?.[1]}
        </button>
    )
    const [data, setData] = useState<object>()
    useEffect(() => {
        (async () => {
            const response = await fetch(url)
            const data: object| object[] = await response.json()
            setData(getData(data))
        })()
    }, [url])
    return (
        <div className="d-flex flex-column">
            {pList}
            <div className="d-flex pt-4">
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

